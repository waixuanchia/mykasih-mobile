import * as Yup from 'yup';

const validationSchema = Yup.object().shape({

    name:Yup.string().required('Name is required'),
    contact:Yup.string().required('contact is required').matches(/[0-9]{3}-[0-9]{7,8}/),
    option:Yup.string().required('Please select a jkm ministry to proceed'),
    description:Yup.string().required('Description is required'),

})

export default validationSchema;