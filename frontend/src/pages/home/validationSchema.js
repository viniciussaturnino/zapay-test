import * as Yup from 'yup';

export default Yup.object().shape({
    licensePlate: Yup.string().required('Campo obrigatório'),
    renavam: Yup.string().required('Campo obrigatório'),
    // debtOptions: Yup.string().required('Campo obrigatório'),
});