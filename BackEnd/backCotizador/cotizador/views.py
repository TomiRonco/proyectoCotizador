from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json


def calcular(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        resultado = {
            "monto_dolar": data['amount'] * 2,
            "monto_uva": data['amount'] * 3,
            "monto_ipc": data['amount'] * 1.5,
            "monto_promedio": data['amount'] * 2.5,
        }

        return JsonResponse(resultado)

    return JsonResponse({"error": "Método no permitido"}, status=405)