from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class CalcularView(APIView):
    def post(self, request):
        try:
            amount = float(request.data.get('amount'))  # Convertir a float
            date = request.data.get('date')

            # Supongamos que la tasa de cambio es de 1 dólar = 100 pesos (valor ficticio)
            tasa_de_cambio = 100
            monto_en_dolares = amount / tasa_de_cambio

            # Supongamos que el IPC es del 3% (valor ficticio)
            ipc = 3

            # Supongamos que la UVA es del 5% (valor ficticio)
            uva = 5

            resultado = {
                'monto_en_dolares': monto_en_dolares,
                'ipc': ipc,
                'uva': uva,
            }

            # Calcular el promedio
            promedio = (monto_en_dolares + ipc + uva) / 3
            resultado['promedio'] = promedio

            return Response(resultado, status=status.HTTP_200_OK)

        except (ValueError, TypeError, ZeroDivisionError) as e:
            return Response({'error': 'No se pudo realizar el cálculo.'}, status=status.HTTP_400_BAD_REQUEST)
