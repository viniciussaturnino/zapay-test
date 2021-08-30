import React, { useState } from 'react';
import { Container, Header, FormWrapper, Form, Input, Button, Error } from './styles';
import Select from '../../components/select';
import { Formik } from 'formik';
import schema from './validationSchema';
import { getDebts } from '../../services/debts';
import ModalComp from '../../components/modal';
import { toast } from 'react-toastify';

export default function Home() {
    const [results, setResults] = useState([])
    const [open, setOpen] = useState(false)

    function submit(values) {
        const payload = {
            license_plate: values.licensePlate,
            renavam: values.renavam,
            debt_option: values.debtOption
        }

        getDebts(payload)
            .then((response) => {
                setResults(response.data)
                setOpen(true)
            })
            .catch((error) => {
                const message = error.response.data.message
                toast.error(message);
            })
    }

    return (
        <>
            <Container>
                <Header>Z</Header>
                <Formik
                    initialValues={{
                        licensePlate: '',
                        renavam: '',
                        debtOption: '',
                    }}
                    onSubmit={submit}
                    validationSchema={schema}
                >
                    {({errors, values, handleChange, handleSubmit, setFieldValue}) => (
                        <FormWrapper>
                            <Form>      
                                <Input
                                    placeholder='Placa do Veículo'
                                    name='licensePlate'
                                    value={values.licensePlate}
                                    onChange={handleChange}
                                    error={errors.licensePlate}
                                />
                                {errors.licensePlate && (<Error>Campo Obrigatório</Error>)}
                                <Input
                                    placeholder='Renavam'
                                    name='renavam'
                                    value={values.renavam}
                                    onChange={handleChange}
                                    error={errors.renavam}
                                />
                                {errors.renavam && (<Error>Campo Obrigatório</Error>)}
                                <Select
                                    placeholder='Opção de busca'
                                    name='debtOption'
                                    value={values.debtOption}
                                    onChange={(e) => setFieldValue('debtOption', e)}
                                    error={errors.debtOption}
                                />
                                {errors.debtOption && (<Error>Campo Obrigatório</Error>)}
                            </Form>
                            <Button onClick={handleSubmit}>Buscar</Button>
                        </FormWrapper>
                    )}
                </Formik>
            </Container>
            <ModalComp open={open} title='Resultado' results={results} onClose={() => setOpen(false)}/>
        </>
    );
}