from django.http import JsonResponse

def product_list(request):
    products = [
        {"id": 1, "name": "Wireless Headphones", "price": 89.99},
        {"id": 2, "name": "Smart Watch", "price": 249.99},
    ]
    return JsonResponse(products, safe=False)
