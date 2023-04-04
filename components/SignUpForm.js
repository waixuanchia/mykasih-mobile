import React from 'react';
import Input from '../components/InputFormik';
import {Formik} from 'formik';
import SubmitButton from '../components/SubmitButton';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {validateInput} from '../utils/actions/formActions';
import validationSchema from '../utils/RegistrationValidationSchema';
import {signUp} from '../utils/actions/userActions';

const initialValues = {
    first_name:'',
    last_name:'',
    email:'',
    password:'',
}


const SignUpForm = ({to}) => {

    const register = async (data) => {


        try{

            await signUp(data);
            to();
        }catch(err){

        }

    }

    return (
        
        <>
            <Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={(values) => register(values)}>

                {
                    ({handleSubmit,isValid}) => (

                        <>
                        <Input 
                                id="first_name"
                                name="first_name"
                                icon="user-o" 
                                label="first Name" 
                                iconPack={FontAwesome}
                                
                                autoCapitalize="none" 
                        />
                        <Input 
                                id="last_name"
                                name="last_name"
                                icon="user-o" 
                                label="Last Name" 
                                iconPack={FontAwesome}
                                  
                                autoCapitalize="none"
                                
                        />
                        <Input 
                                id="email"
                                name="email"
                                icon="mail" 
                                label="Email" 
                                iconPack={Feather}
                                 
                                keyboardType="email-address"
                                autoCapitalize="none"
                                
                        />
                        <Input
                                id="password" 
                                name="password"
                                icon="lock" 
                                label="Password" 
                                iconPack={Feather}
                                autoCapitalize="none"
                                secureTextEntry
                                  
                                
                        />

                        <SubmitButton title="sign up" disabled={!isValid}  onPress={handleSubmit} style={{marginTop:20}}  />
                    </>
                )
            }
            </Formik>
        </>
    )

}

export default SignUpForm;