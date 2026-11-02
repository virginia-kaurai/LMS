from django.contrib import admin

from django.contrib import admin
from .models import Units, Enrollment, CourseMaterial,Grade,AcademicYear
# Register your models here.

admin.site.register(Units)
admin.site.register(Grade)
admin.site.register(Enrollment)

admin.site.register(AcademicYear)
