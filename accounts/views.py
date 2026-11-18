from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from rest_framework.response import Response
from .serializers import UserSerializer
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.authentication import JWTAuthentication


class RegisterView(APIView):
    def post(self, request):
        serializedData = UserSerializer(data = request.data)
        if serializedData.is_valid():
            serializedData.save()
            return Response({'message': 'user created successfully, please login'}, status=status.HTTP_201_CREATED)
        return Response(serializedData.errors, status=status.HTTP_400_BAD_REQUEST)
    

def get_token_for_user(user):
    refresh = RefreshToken.for_user(user)
    return({
        'refresh': str(refresh),
        'access': str(refresh.access_token)
    })
    
class LoginView(APIView):
    def post(self, request):
        login_id = request.data.get('login_id')
        password = request.data.get('password')
        
        user =  authenticate(login_id=login_id, password=password)
        
        if user is not None:
            user_role = "ADMIN" if user.is_superuser else user.role
            token = get_token_for_user(user)
            response = Response({'message': 'logged in successfully', "user": user.id, "role": user_role.upper() if user_role else None})
            response.set_cookie(
                key='access_token',
                value=token['access'],
                httponly=True,
                samesite='None',
                secure=True
            )
            response.set_cookie(
                key='refresh_token',
                value=token['refresh'],
                httponly=True,
                samesite='None',
                secure=True
            )
            return response
        else:
            return Response({'error': 'Invalid Credentials'}, status=status.HTTP_401_UNAUTHORIZED)

        
        
class LogoutView(APIView):
    def post(self, request):
        response = Response()
        response.delete_cookie('access_token')
        response.delete_cookie('refresh_token')
        response.data = {'message': 'logged out'}
        return response
    


class UserDetailView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        
        # Base user data
        data = {
            "id": user.id,
            "login_id": getattr(user, 'login_id', getattr(user, 'username', '')), 
            "first_name": user.first_name,
            "last_name": user.last_name,
            "email": user.email,
            "role": "ADMIN" if user.is_superuser else user.role,
        }

        # 1. Handle superusers first (they don't need a profile)
        if user.is_superuser:
            return Response(data, status=status.HTTP_200_OK)
            
        # 2. Handle Students
        if user.role == "STUDENT":
            try:
                student_profile = user.student_profile
                data.update({
                    "programme": student_profile.programme.name,
                    "current_year": student_profile.current_year,
                    "admission_year": student_profile.admission_year
                })
            except Exception:
                data.update({"programme": "N/A", "current_year": "N/A", "admission_year": "N/A"})
                
        # 3. Handle Lecturers (Changed from ADMIN to LECTURER)
        elif user.role == "LECTURER":
            try:
                lecturer_profile = user.lecturer_profile
                data.update({
                    "department": lecturer_profile.department.name
                })
            except Exception:
                data.update({"department": "N/A"}) 
                
        # 4. Handle normal Admins (if they have a different profile)
        elif user.role == "ADMIN":
            # If normal admins need specific data, add it here. 
            # Otherwise, we just pass the base data.
            pass 
                
        # 5. Fallback for any other unknown role
        return Response(data, status=status.HTTP_200_OK)