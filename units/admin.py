from django.contrib import admin

from django.contrib import admin
from .models import Units, Enrollment, CourseMaterial
# Register your models here.

admin.site.register(Units)
admin.site.register(Enrollment)
admin.site.register(CourseMaterial)
