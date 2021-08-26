def translate_license_plate(license_plate):
    splited_license_plate = list(license_plate)
    letter_map = {
        'A': '0',
        'B': '1',
        'C': '2',
        'D': '3',
        'E': '4',
        'F': '5',
        'G': '6',
        'H': '7',
        'I': '8',
        'J': '9'
    }

    splited_license_plate[4] = letter_map[splited_license_plate[4].upper()]

    return ''.join(splited_license_plate)