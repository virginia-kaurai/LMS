from django.db import models

from django.conf import settings



class Units(models.Model):
    code = models.CharField(max_length=20, unique=True)
    name = models.CharField(max_length=200)

    lecturer = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        related_name="units"
    )

    description = models.TextField()

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.code} - {self.name}"
    
class Enrollment(models.Model):

    student = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="unit_enrollments"
    )

    course = models.ForeignKey(
        Units,
        on_delete=models.CASCADE,
        related_name="enrollments"
    )

    enrolled_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=["student", "course"],
                name="unique_unit_student_enrollment"
            )
        ]
        
class CourseMaterial(models.Model):

   course = models.ForeignKey(
    Units,
    on_delete=models.CASCADE,
    related_name="materials_for_units"
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

class AcademicYear(models.Model):
    name = models.CharField(max_length=20, unique=True)   # e.g. "2026" or "2026/2027"
    is_current = models.BooleanField(default=False)
    is_promoted = models.BooleanField(default=False)

    def __str__(self):
        return self.name




class Grade(models.Model):
    student = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="grades"
    )

    Unit = models.ForeignKey(
        Units,
        on_delete=models.CASCADE,
        related_name="grades"
    )
    academic_year = models.ForeignKey(AcademicYear, on_delete=models.CASCADE, related_name="grades")

    score = models.DecimalField(max_digits=5, decimal_places=2)

    