from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class CalcularView(APIView):
    def post(self, request):
        try:
            amount = float(request.data.get('amount'))
            date = request.data.get('date')

            tasa_de_cambio = 900
            monto_en_dolares = amount * tasa_de_cambio
            
            ipc = 3

            uva = 5

            resultado = {
                'monto_en_dolares': monto_en_dolares,
                'ipc': ipc,
                'uva': uva,
            }

            promedio = (monto_en_dolares + ipc + uva) / 3
            resultado['promedio'] = promedio

            return Response(resultado, status=status.HTTP_200_OK)

        except (ValueError, TypeError, ZeroDivisionError) as e:
            return Response({'error': 'No se pudo realizar el cálculo.'}, status=status.HTTP_400_BAD_REQUEST)
