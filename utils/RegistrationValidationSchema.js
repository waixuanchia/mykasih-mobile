import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    first_name: Yup.string().required('This field is required').min(2,'The first name should have minimum length of two characters'),
    last_name:Yup.string().required('This field is required'),
    email:Yup.string().email().required('This field is required'),
    password:Yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character').required('This field is required')

})

export default validationSchema;