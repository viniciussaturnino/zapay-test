from debts.utils import translate_license_plate
from debts.api import API


class SPService:
    """
    Conecta com o webservice do Detran-SP.
    """

    def __init__(self, **kwargs):
        """
        Construtor.
        """

        self.params = kwargs
        self.tickets = {}
        self.ipvas = {}
        self.dpvats = {}
        self.licensing = {}

    def build_debt(self, response):
        service = response.get('Servico')

        if service == 'Multas':
            self.tickets = (response.get('Multas'))
        elif service == 'IPVA':
            self.ipvas = (response.get('IPVAs'))
        elif service == 'DPVAT':
            self.dpvats = (response.get('DPVATs'))
        elif service == 'Licenciamento':
            self.licensing = response

    def get_json_response(self, method):
        """
        Pega a resposta da requisição em json.
        """

        methods = []

        if method == 'all':
            methods.extend([
                'ConsultaMultas',
                'ConsultaIPVA',
                'ConsultaDPVAT',
                'ConsultaLicenciamento'
            ])
        else:
            methods.append(method)

        for method in methods:
            translated_license_plate = translate_license_plate(self.params["license_plate"])
            api = API(translated_license_plate, self.params["renavam"], method)
            response_json = api.fetch()
            self.build_debt(response_json)

    def debt_search(self):
        """
        Pega os débitos de acordo com a opção passada.
        """

        if self.params['debt_option'] == 'ticket':
            self.get_json_response("ConsultaMultas")

        elif self.params['debt_option'] == 'ipva':
            self.get_json_response("ConsultaIPVA")

        elif self.params['debt_option'] == 'dpvat':
            self.get_json_response("ConsultaDPVAT")

        elif self.params['debt_option'] == 'licensing':
            self.get_json_response("ConsultaLicenciamento")
        
        elif self.params['debt_option'] == 'all':
            self.get_json_response('all')

        else:
            raise Exception("opção inválida")
        
        debts = {
            'IPVAs': self.ipvas or {},
            'DPVATs': self.dpvats or {},
            'Multas': self.tickets or {},
            'Licenciamento': self.licensing or {},
        }

        # print(debts)

        for debt in debts:
            if debts[debt] == {}:
                debts[debt] = None

        return debts
