from debts.service import SPService
from debts.parser import SPParser


class DebtsRequest:

    def __init__(self, license_plate, renavam, debt_option):
        self.license_plate = license_plate
        self.renavam = renavam
        self.debt_option = debt_option


    def search(self):
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

        if self.debt_option == "ticket":
            result = parser.collect_ticket_debts()
        elif self.debt_option == "ipva":
            result = parser.collect_ipva_debts()
        elif self.debt_option == "dpvat":
            result = parser.collect_insurance_debts()
        elif self.debt_option == "licensing":
            result = parser.collect_licensing_debts()
        elif self.debt_option == "all":
            result.append(parser.collect_ticket_debts())
            result.append(parser.collect_ipva_debts())
            result.append(parser.collect_insurance_debts())
            result.append(parser.collect_licensing_debts())

        return result
