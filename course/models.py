from django.db import models

from django.db import models
from django.conf import settings
from academics.models import Programme
from units.models import Units
from django.db import models


class Course(models.Model):
    code = models.CharField(max_length=20, unique=True)
    name = models.CharField(max_length=200)

    lecturer = models.ForeignKey(
        "accounts.LecturerProfile",
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name="courses"
    )

    programme = models.ForeignKey(
        Programme,
        on_delete=models.CASCADE,
        related_name="courses"
    )

    description = models.TextField()

    created_at = models.DateTimeField(auto_now_add=True)
def __str__(self):
        return f"{self.code} - {self.name}"

    
class Enrollment(models.Model):

    student = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="course_enrollments"
    )

    course = models.ForeignKey(
        Course,
        on_delete=models.CASCADE,
        related_name="enrollments"
    )

    enrolled_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=["student", "course"],
                name="unique_course_student_enrollment"
            )
        ]
        
class CourseMaterial(models.Model):

    unit = models.ForeignKey(
        Units,
        on_delete=models.CASCADE,
        related_name="materials"
    )

    lecturer = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="unit_uploaded_materials"
    )

    title = models.CharField(max_length=200)

    file = models.FileField(
        upload_to="course_materials/"
    )

    uploaded_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-uploaded_at"]