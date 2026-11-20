from django.urls import path
from .views import ExecutePromotionView,PreviewPromotionView,ProgrammeListView

urlpatterns = [
    path("promotion/execute/", ExecutePromotionView.as_view(), name="execute_promotion"),
    path("promotion/preview/", PreviewPromotionView.as_view(), name="preview_promotion"),
    path("programmelist/", ProgrammeListView.as_view(), name="programme_list"),

]