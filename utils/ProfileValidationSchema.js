import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    first_name: Yup.string().required('This field is required').min(2,'The first name should have minimum length of two characters'),
    last_name:Yup.string().required('This field is required'),
    email:Yup.string().email().required('This field is required'),
    address_line_1:Yup.string().nullable(),
    address_line_2:Yup.string().nullable(),
    city:Yup.string().nullable()

})

export default validationSchema;