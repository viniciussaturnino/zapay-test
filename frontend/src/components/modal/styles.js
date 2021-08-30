import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px 0;
    background-color: #C6C6C6AA;

    opacity: ${({ open }) => (open ? 1 : 0)};

    transition: 300ms ease;
`;

export const Card = styled.div`
    background-color: #fff;
    border-radius: 2rem;
    position: relative;
    min-width: 50rem;
`;

export const Header = styled.div`
    padding: 4.5rem 3.8rem 0;
    display: flex;
    align-items: center;
    color: #FE0060;
    font-size: 2.4rem;
    font-family: 'Nunito';
    font-weight: 900;

    ${(props) =>
    props.position === 'space-between'
        ? `justify-content: space-between;`
        : `justify-content: flex-end;`}
`;

export const CloseButton = styled.div`
    height: 5rem;
    width: 10rem;
    background-color: #FE0060;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    font-family: 'Nunito';

    align-items: center;
    justify-content: center;
    padding: 0 1.5rem;

    color: #FFFFFF;
    font-size: 1.4rem;
    font-weight: 400;

    :hover {
    transform: scale(1.02);
    }

    transition: all 200ms ease;
`;

export const WrapperContent = styled.div`
    padding: 0 3.8rem 3.8rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    margin-top: 2.5rem;
`;

export const ResultContainer = styled.div`
    width: 100%;
    height: 100%;
    background: #F6F6F6;
    margin-top: 1rem;
    border-radius: 8px;
    padding: 1rem;
    color: #FE0060;
    font-family: 'Nunito';
    box-shadow: rgba(149, 157, 165, 0.6) 0px 8px 24px;
`;

export const PriceWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1.5rem;
`;

export const ResultTitle = styled.text`
    font-family: 'Nunito';
    color: #000000;
    margin-bottom: 1.5rem;
`;
