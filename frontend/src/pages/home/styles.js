import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Header = styled.div`
    padding: 18px 0;
    background: #FE0060;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Nunito';
    font-weight: 900;
    font-size: 48px;
`;

export const FormWrapper = styled.div`
    width: 619px;
    height: 472px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-self: center;
    margin-top: 120px;
`;

export const Form = styled.div`
    width: 100%;
    height: 370px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #E6E6E6;
    padding: 66px 54px;
    border-radius: 10px;
`;

export const Input = styled.input`
    width: 100%;
    height: 67px;
    background: #FFFFFF;
    font-size: 28px;
    padding: 0 24px;
    font-family: 'Nunito';
`;

export const Button = styled.button`
    width: 100%;
    height: 67px;
    background: #FE0060;
    font-family: 'Nunito';
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    font-size: 28px;
    padding: 0 24px;
    border-radius: 10px;
    border: none;
    transition: filter 0.2s;
    :hover {
        filter: brightness(90%)
    }
`;

export const Error = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  color: red;
  margin-top: 0.5rem;
  opacity: 1;
  text-align: left;
  transition: all 300ms ease 100ms;
`;