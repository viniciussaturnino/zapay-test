import React from 'react';
import { Container, Header, FormWrapper, Form, Input, Button } from './styles';
import Select from '../../components/select';

export default function Home() {
    return (
        <Container>
            <Header>Z</Header>
            <FormWrapper>
                <Form>
                    <Input placeholder='Placa do Veículo'/>
                    <Input placeholder='Renavam'/>
                    <Select />
                </Form>
                <Button>Buscar</Button>
            </FormWrapper>
        </Container>
    );
}