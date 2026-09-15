from django.urls import path, include
from . import views

urlpatterns = [

    path('enroll/', views.EnrollCourseView.as_view(), name='enroll_unit'),
    path('unenroll/', views.UnEnrollCourseView.as_view(), name='unenroll_unit'),
]
 