import React from 'react';
import ReactSelect from 'react-select';

const options = [
    {value: 'ipva', label: 'IPVA'},
    {value: 'dpvat', label: 'DPVAT'},
    {value: 'ticket', label: 'Multas'},
    {value: 'licensing', label: 'Licenciamento'},
    {value: '', label: 'Todos'},
]

const customStyles = {
    control: (base) => ({
        ...base,
        height: 67,
        borderRadius: 10,
        border: 'none',
        padding: '0 16px',
        fontSize: 28,
        fontFamily: 'Nunito',
    }),

    option: (base, state) => ({
        ...base,
        fontSize: 28,
        color: '#969696',
        background: '#FFFFFF',
        fontFamily: 'Nunito',
    }),
    
    singleValue: (base) => ({
        color: '#000000',
        fontFamily: 'Nunito',
    })
}

export default function Select({onChange}) {
    return (
        <ReactSelect 
            options={options}
            styles={customStyles}
            placeholder='Opção de busca'
            onChange={(e) => onChange(e.value)}
        />
    );
}
