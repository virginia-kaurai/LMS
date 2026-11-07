from django.db import models

# Create your models here.

class School(models.Model):
    name = models.CharField(max_length=200)
    code = models.CharField(max_length=20, unique=True)

    def __str__(self):
        return self.name


class Department(models.Model):

    school = models.ForeignKey(
        School,
        on_delete=models.CASCADE,
        related_name="departments"
    )

    name = models.CharField(max_length=200)
    code = models.CharField(max_length=20)

    def __str__(self):
        return self.name

class Programme(models.Model):

    department = models.ForeignKey(
        Department,
        on_delete=models.CASCADE,
        related_name="programmes"
    );

    name = models.CharField(max_length=200)
    code = models.CharField(max_length=30, unique=True)
    order=models.PositiveIntegerField(default=1)
    passmark=models.DecimalField(max_digits=5, decimal_places=2, default=50.00)

    def __str__(self):
        return self.name



class Student(models.Model):
    first_name = models.CharField(max_length=100)    # your existing fields
    last_name = models.CharField(max_length=100)
    programme = models.ForeignKey(                   # already there (confirm it exists)
        "academics.Programme", on_delete=models.PROTECT
    )
    is_graduated = models.BooleanField(default=False)  # ADD

    def __str__(self):
        return f"{self.first_name} {self.last_name}"       



class PromotionHistory(models.Model):
    STATUS = [
        ("promoted", "Promoted"),
        ("repeated", "Repeated"),
        ("graduated", "Graduated"),
        ("pending", "Pending review"),
    ]

    student = models.ForeignKey(Student, on_delete=models.CASCADE, related_name="promotions")
    academic_year = models.CharField(max_length=9)  # e.g. "2025/2026"
    from_programme = models.ForeignKey(Programme, on_delete=models.PROTECT, related_name="+")
    to_programme = models.ForeignKey(Programme, null=True, blank=True,
                                     on_delete=models.PROTECT, related_name="+")
    average_score = models.DecimalField(max_digits=5, decimal_places=2, null=True, blank=True)
    pass_mark = models.DecimalField(max_digits=5, decimal_places=2)
    status = models.CharField(max_length=10, choices=STATUS)
    promoted_at = models.DateTimeField(null=True, blank=True)

    class Meta:
        constraints = [
            models.UniqueConstraint(fields=["student", "academic_year"],
                                    name="one_promotion_per_student_year")
        ]