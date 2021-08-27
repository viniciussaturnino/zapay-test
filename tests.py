from utils import translate_license_plate
from mocks import DATA, RESULT
from service import SPService
from parser import SPParser


def test_translate_license_plate():
    license_plate = "ABC1C34"
    translated_license_plate = translate_license_plate(license_plate)
    assert translated_license_plate == DATA.get('license_plate')

def test_search_ticket():
    service = SPService(
        license_plate=DATA.get('license_plate'),
        renavam=DATA.get('renavam'),
        debt_option="ticket"
    )
    search_result = service.debt_search()
    parser = SPParser(search_result)
    result = parser.collect_ticket_debts()
    assert result == RESULT.get('ticket')

def test_search_ipva():
    service = SPService(
        license_plate=DATA.get('license_plate'),
        renavam=DATA.get('renavam'),
        debt_option="ipva"
    )
    search_result = service.debt_search()
    parser = SPParser(search_result)
    result = parser.collect_ipva_debts()
    assert result == RESULT.get('ipva')

def test_search_dpvat():
    service = SPService(
        license_plate=DATA.get('license_plate'),
        renavam=DATA.get('renavam'),
        debt_option="dpvat"
    )
    search_result = service.debt_search()
    parser = SPParser(search_result)
    result = parser.collect_insurance_debts()
    assert result == RESULT.get('dpvat')

def test_search_licensing():
    service = SPService(
        license_plate=DATA.get('license_plate'),
        renavam=DATA.get('renavam'),
        debt_option="licensing"
    )
    search_result = service.debt_search()
    parser = SPParser(search_result)
    result = parser.collect_licensing_debts()
    assert result == RESULT.get('licensing')