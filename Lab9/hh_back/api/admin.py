from django.contrib import admin

from api.models import *

# Register your models here.
@admin.register(Company)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'description', 'city', 'address')


@admin.register(Vacancy)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'description', 'salary', 'company')