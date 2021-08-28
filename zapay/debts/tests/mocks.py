DATA = {
    "license_plate": "ABC1234",
    "renavam": "11111111111",
}

API = {
    "ticket": {
        "Multas": {
            "Multa": [
                {
                    "AIIP": "5E5E5E5E  ",
                    "Guia": 472535212,
                    "Valor": 20118,
                    "DescricaoEnquadramento": "Estacionar em Desacordo com a Sinalizacao."
                },
                {
                    "AIIP": "6F6F6F6F  ",
                    "Valor": 13166,
                    "DescricaoEnquadramento": "Trans. Veloc. Super. a Maxima Permitida em Ate 20%."
                }
            ]
        },
        "Servico": "Multas",
        "Veiculo": {
            "UF": "SP",
            "Placa": "ABC1234",
            "CPFCNPJ": "000.000.000-00",
            "Renavam": "11111111111",
            "Proprietario": "JOHN",
        }
    },
    "ipva": {
        "IPVAs": {
            "IPVA": [
                {
                    "Cota": 8,
                    "Valor": 136569,
                    "Exercicio": 2021,
                },
                {
                    "Cota": 2,
                    "Valor": 101250,
                    "Exercicio": 2020,
                }
            ]
        },
        "Servico": "IPVA",
        "Veiculo": {
            "UF": "SP",
            "Placa": "ABC1234",
            "CPFCNPJ": "000.000.000-00",
            "Renavam": "11111111111",
            "Proprietario": "JOHN",
        }
    },
    "dpvat": {
        "DPVATs": {
            "DPVAT": [
                {
                    "Valor": 523,
                    "Exercicio": 2020,
                }
            ]
        },
        "Servico": "DPVAT",
        "Veiculo": {
            "UF": "SP",
            "Placa": "ABC1234",
            "CPFCNPJ": "000.000.000-00",
            "Renavam": "11111111111",
            "Proprietario": "JOHN",
            }
    },
    "licensing": {
        "Servico": "Licenciamento",
        "Veiculo": {
            "UF": "SP",
            "Placa": "ABC1234",
            "CPFCNPJ": "000.000.000-00",
            "Renavam": "11111111111",
            "Proprietario": "JOHN",
        },
        "Exercicio": 2021,
        "TaxaLicenciamento": 9891
    }
}

RESULT = {
    "ticket": [
        {
            "amount": 201.18,
            "auto_infraction": "5E5E5E5E  ",
            "description": "Estacionar em Desacordo " +
            "com a Sinalizacao.",
            "title": "Infração de Trânsito",
            "type": "ticket"
        },
        {
            "amount": 131.66,
            "auto_infraction": "6F6F6F6F  ",
            "description": "Trans. Veloc. Super. a Maxima Permitidaem Ate 20%.",
            "title": "Infração de Trânsito",
            "type": "ticket"
        }
    ],
    "ipva": [
        {
            "amount": 1365.69,
            "description": "IPVA 2021",
            "title": "IPVA - Cota Única",
            "type": "ipva",
            "year": 2021,
            "installment": "unique"
        },
        {
            "amount": 1012.5,
            "description": "IPVA 2020",
            "title": "IPVA - Cota 2",
            "type": "ipva",
            "year": 2020,
            "installment": 2
        }
    ],
    "dpvat": [
        {
            "amount": 5.23,
            "description": "DPVAT 2020",
            "title": "Seguro Obrigatório",
            "type": "insurance",
            "year": 2020
        }
    ],
    "licensing": [
        {
            "amount": 98.91,
            "title": "Licenciamento",
            "description": "Licenciamento 2021",
            "year": 2021,
            "type": "licensing"
        }
    ]
}

