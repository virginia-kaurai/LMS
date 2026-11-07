from django.urls import path
from .views import ExecutePromotionView

urlpatterns = [
    path("promotion/execute/", ExecutePromotionView.as_view(), name="execute_promotion"),
]