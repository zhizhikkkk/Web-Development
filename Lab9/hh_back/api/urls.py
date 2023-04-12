from django.urls import path, re_path
from api import views

urlpatterns = [
    path('vacancies/', views.vacancies_list),
    path('vacancies/<int:id>/', views.vacancies_detail),
    path('vacancies/top_ten/', views.vacancies_top_ten),
    path('companies/', views.company_list),
    path('companies/<int:id>/', views.company_detail),
    path('companies/<int:id>/vacancies/', views.vacancies_by_company),

]