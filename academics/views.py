from django.db import transaction
from django.utils import timezone
from rest_framework import status
from rest_framework.permissions import IsAdminUser
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Programme, PromotionHistory, Student


def calculate_student_average(student, academic_year):
    """Return the student's average as a Decimal, or None if no results.
    EDIT THIS to read from your assesments app, for example:
        from django.db.models import Avg
        from assesments.models import Result
        avg = Result.objects.filter(student=student).aggregate(a=Avg("score"))["a"]
        return avg
    """
    return None


class ExecutePromotionView(APIView):
    permission_classes = [IsAdminUser]

    def post(self, request):
        academic_year = request.data.get("academic_year")
        programme_id = request.data.get("programme")

        if not academic_year or not programme_id:
            return Response({"error": "academic_year and programme are required."},
                            status=status.HTTP_400_BAD_REQUEST)

        current = Programme.objects.filter(pk=programme_id).first()
        if not current:
            return Response({"error": "Programme not found."},
                            status=status.HTTP_404_NOT_FOUND)

        # next stage = next higher order within the same department
        next_programme = (
            Programme.objects
            .filter(department=current.department, order__gt=current.order)
            .order_by("order")
            .first()
        )

        counts = {"promoted": 0, "repeated": 0, "graduated": 0, "pending": 0}
        processed = []

        with transaction.atomic():
            students = Student.objects.select_for_update().filter(
                programme=current, is_graduated=False
            )

            for student in students:
                if PromotionHistory.objects.filter(
                        student=student, academic_year=academic_year).exists():
                    continue

                average = calculate_student_average(student, academic_year)

                if average is None:
                    decision, destination = "pending", None
                elif average < current.passmark:
                    decision, destination = "repeated", None
                elif next_programme is None:
                    decision, destination = "graduated", None
                else:
                    decision, destination = "promoted", next_programme

                PromotionHistory.objects.create(
                    student=student,
                    academic_year=academic_year,
                    from_programme=current,
                    to_programme=destination,
                    average_score=average,
                    pass_mark=current.passmark,
                    status=decision,
                    promoted_at=timezone.now()
                    if decision in ("promoted", "graduated") else None,
                )

                if decision == "promoted":
                    student.programme = destination
                    student.save(update_fields=["programme"])
                elif decision == "graduated":
                    student.is_graduated = True
                    student.save(update_fields=["is_graduated"])

                counts[decision] += 1
                processed.append({
                    "student_id": student.pk,
                    "average_score": str(average) if average is not None else None,
                    "decision": decision,
                })

        return Response({
            "message": "Promotion processing completed.",
            "from": current.name,
            "to": next_programme.name if next_programme else None,
            **counts,
            "processed": processed,
        })
    
        return 
        Response({"error": "Profile type not recognized"}, status=status.HTTP_400_BAD_REQUEST)
