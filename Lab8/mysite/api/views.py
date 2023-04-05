from django.http import JsonResponse
from django.shortcuts import render

from api.models import *

# Create your views here.
def product_list(request):
    products = Product.objects.all()
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe=False)

def product_detail(request, product_id):
    try:
        product = Product.objects.get(pk=product_id)
    except Product.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)

    return JsonResponse(product.to_json(), status=200)



def cat_list(request):
    category = Category.objects.all()
    category_json = [c.to_json() for c in category]
    return JsonResponse(category_json, safe=False)

def cat_detail(request, *args, **kwargs):
    cat_id = kwargs['id']
    try:
        category = Category.objects.get(pk=cat_id)
    except Category.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)

    return JsonResponse(category.to_json(), status=200)

def products_by_cat(request, *args, **kwargs):
    cat_id = kwargs['id']
    products = Product.objects.all().filter(category=cat_id)
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe=False)

