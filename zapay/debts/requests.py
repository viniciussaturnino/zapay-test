from debts.service import SPService
from debts.parser import SPParser


class DebtsRequest:
    """
    Responsavel pelo chamado ao service da API
    e tratamento dos dados de entrada.
    """

    def __init__(self, license_plate, renavam, debt_option):
        """
        Construtor.
        """

        self.license_plate = license_plate
        self.renavam = renavam
        self.debt_option = debt_option


    def search(self):
        """
        Responsavel pela pesquisa dos dados de retorno.
        """
        
        service = SPService(
            license_plate=self.license_plate,
            renavam=self.renavam,
            debt_option=self.debt_option
        )
        
        try:
            search_result = service.debt_search()
        except Exception as exc:
            print(exc)

        parser = SPParser(search_result)

        result = []

        switch = {
            "ticket": parser.collect_ticket_debts,
            "ipva": parser.collect_ipva_debts,
            "dpvat": parser.collect_insurance_debts,
            "licensing": parser.collect_licensing_debts,
            "all": parser.collect_all_debts,
        }

        case = switch.get(self.debt_option, 'all')
        result = case()

        return result
