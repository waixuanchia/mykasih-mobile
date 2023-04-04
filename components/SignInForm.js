import React from 'react';
import {Formik} from 'formik';
import Input from '../components/InputFormik';
import SubmitButton from '../components/SubmitButton';
import Feather from 'react-native-vector-icons/Feather';

import {useDispatch} from 'react-redux';
import {signIn} from '../utils/actions/userActions';

const initialValues = {

    email:'',
    password:''

}
const SignInForm = (props) => {

    const dispatch = useDispatch();

    function login(email,password){
 
        
        dispatch(signIn(email,password))
    }


    return (
        <>
            <Formik initialValues={initialValues} onSubmit={(values) => login(values.email,values.password)}>

            {({handleSubmit}) => (
                <>
                    <Input id="email" name="email" icon="mail" label="Email" iconPack={Feather} autoCapitalize="none" keyboardType="email-adress"  />
                    <Input id="password" name="password" icon="lock" label="Password" iconPack={Feather} autoCapitalize="none" secureTextEntry  />
                    
                    <SubmitButton title="sign in" onPress={handleSubmit} style={{marginTop:20}}  />
                </>
                )
            }
            </Formik>   
        </>
    )

}

export default SignInForm;