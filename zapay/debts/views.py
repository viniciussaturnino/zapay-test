from debts.service import SPService
from debts.parser import SPParser
from rest_framework.views import APIView
from rest_framework.response import Response
from debts.requests import DebtsRequest

class DebtsView(APIView):
    
    def get(self, request):
        query_params = request.GET
        debt_option = query_params.get('debt_option') or 'all'
        
        try:
            request = DebtsRequest(
                license_plate=query_params.get('license_plate'),
                renavam=query_params.get('renavam'),
                debt_option=debt_option,
            )
            result = request.search()     
        except Exception as exc:
            return Response(
                data={
                    'message': 'Um erro ocorreu!',
                    'error': f'{exc}'
                },
                status=400
            )

        return Response(result)
