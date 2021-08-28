from debts.service import SPService
from debts.parser import SPParser
from rest_framework.views import APIView
from rest_framework.response import Response

class DebtsView(APIView):
    
    def get(self, request):
        query_params = request.GET
        debt_option = query_params.get('debt_option') or 'all'
        
        service = SPService(
            license_plate=query_params.get('license_plate'),
            renavam=query_params.get('renavam'),
            debt_option=debt_option
        )
        
        try:
            search_result = service.debt_search()
        except Exception as exc:
            print(exc)

        parser = SPParser(search_result)

        result = []

        if debt_option == "ticket":
            result = parser.collect_ticket_debts()
        elif debt_option == "ipva":
            result = parser.collect_ipva_debts()
        elif debt_option == "dpvat":
            result = parser.collect_insurance_debts()
        elif debt_option == "licensing":
            result = parser.collect_licensing_debts()
        elif debt_option == "all":
            result.append(parser.collect_ticket_debts())
            result.append(parser.collect_ipva_debts())
            result.append(parser.collect_insurance_debts())
            result.append(parser.collect_licensing_debts())

        return Response(result)
