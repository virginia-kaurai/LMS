from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from .models import Enrollment, CourseMaterial ,Units
from django.db import IntegrityError
from accounts.permissions import IsStudent, IsLecturerOrAdmin


class EnrollCourseView(APIView):
    permission_classes = [IsStudent]

    def post(self ,request ):
        student = request.user
        course_code = request.data.get('course_code')

        course = Units.objects.filter(code=course_code).first()
        


        try:
            Enrollment.objects.create(student=student ,course=course)
            return Response({'message': f"{course_code}Enrolled in course successfully"}, status=status.HTTP_201_CREATED)
        except IntegrityError:
            return Response({'error': 'You are already enrolled in this course'}, status=status.HTTP_400_BAD_REQUEST)



class UnEnrollCourseView(APIView):
    permission_classes = [IsStudent]

    def post(self, request):
        student = request.user
        course_code = request.data.get('course_code')

        course = Units.objects.filter(code=course_code).first()
        print(course)

        enrollment = Enrollment.objects.filter(student=student, course=course).first()
        if enrollment:
            enrollment.delete()
            return Response({'message': f"Unenrolled from {course_code} successfully"}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'You are not enrolled in this course'}, status=status.HTTP_400_BAD_REQUEST)