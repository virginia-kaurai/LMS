from django.db import models
from django.contrib.auth.models import AbstractUser , BaseUserManager
from django.conf import settings
from academics.models import Programme, Department


class UserManager(BaseUserManager):

    def create_user(self, login_id, password=None, **extra_fields):

        if not login_id:
            raise ValueError("The login_id must be provided")

        user = self.model(
            login_id=login_id,
            **extra_fields
        )

        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, login_id, password=None, **extra_fields):
        
        extra_fields.setdefault("role", "ADMIN")
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        extra_fields.setdefault("is_active", True)

        return self.create_user(
            login_id,
            password,
            **extra_fields
        )

class User(AbstractUser):
    ROLE_CHOICES = [
        ('student', 'Student'),
        ('lecturer', 'Lecturer'),
        ('admin', 'Admin'),
    ]

    role = models.CharField(
        max_length=50,
        choices=ROLE_CHOICES,
        default='student'
    )
    username = None
    login_id = models.CharField(max_length=50, unique=True)
    objects=UserManager()
    USERNAME_FIELD = 'login_id'
    REQUIRED_FIELDS = ['first_name','last_name', 'email']


    def __str__(self):
        return self.login_id





class StudentProfile(models.Model):

    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="student_profile"
    )

    programme = models.ForeignKey(
        Programme,
        on_delete=models.PROTECT,
        related_name="students"
    )

    current_year = models.PositiveIntegerField(
        default=1
    )

    admission_year = models.PositiveIntegerField()

    def __str__(self):
        return self.user.login_id
    
class LecturerProfile(models.Model):

    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="lecturer_profile"
    )

    department = models.ForeignKey(
        Department,
        on_delete=models.PROTECT,
        related_name="lecturers"
    )

    def __str__(self):
        return self.user.login_id