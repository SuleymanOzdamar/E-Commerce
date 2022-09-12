import * as yup from 'yup';

const validations = yup.object().shape({
    email: yup
        .string()
        .email('Geçerli bir email giriniz.')
        .required(),
    password: yup
        .string()
        .min(6, 'Paralo en az 6 karakter olmalı!')
        .required(),
});

export default validations;