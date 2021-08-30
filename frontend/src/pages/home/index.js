import React from 'react';
import { Container, Header, FormWrapper, Form, Input, Button, Error } from './styles';
import Select from '../../components/select';
import { Formik } from 'formik';
import schema from './validationSchema';
import { getDebts } from '../../services/debts';

export default function Home() {

    function submit(values) {
        const payload = {
            license_plate: values.licensePlate,
            renavam: values.renavam,
            debt_option: values.debtOption
        }

        getDebts(payload)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {})
    }

    return (
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
    );
}