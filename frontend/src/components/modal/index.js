import React from 'react';
import { Modal } from '@material-ui/core';

import {
  Container,
  Card,
  Header,
  CloseButton,
  WrapperContent,
  ResultContainer,
  PriceWrapper,
  ResultTitle,
} from './styles';

function ModalComp({
  children,
  open,
  onClose,
  title,
  results,
}) {
    const CardComp = Card;

    function convertType(type) {
        console.log(type)
        let result = ''
        switch(type) {
            case 'ticket':
                result = 'Multas'
                break;
            case 'ipva':
                result = 'IPVA'
                break;
            case 'insurance':
                result = 'DPVAT'
                break;
            case 'licensing':
                result = 'Licenciamento'
                break;
            default:
                result = ''
        }
        console.log(result)
        return result;
    }

    return (
    <Modal open={open}>
        <Container open={open}>
        <CardComp>
            <Header position={title ? 'space-between' : 'flex-end'}>
                {title}
                <CloseButton onClick={onClose}>
                    Fechar
                </CloseButton>
            </Header>
            maiamaia
            <WrapperContent>{results.map((current, index) => (
            <ResultContainer>
                <ResultTitle>
                    <h3>Resultado {index + 1}</h3>
                </ResultTitle>
                
                <p>{current.title}</p>
                <p>{current.description}</p>
                <p>{current.auto_infraction}</p>
                <PriceWrapper>
                    <p>R$ {current.amount}</p>
                    <p>{convertType(current.type)}</p>
                </PriceWrapper>
            
            </ResultContainer>
            ))}</WrapperContent>
        </CardComp>
        </Container>
    </Modal>
    );
}

export default ModalComp;
