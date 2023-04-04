import jwt_decode from 'jwt-decode';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import url from '../../constant/constant';
import {authenticate,userLogout} from '../../store/AuthenticationSlice';


let access_timer;

const signIn = (email,password) => {

    return async dispatch => {

        
        const token = await fetch(`${url}/api/token/`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({ email , password })
            
        }).then(res => {
            return res.json()
        });
        
        const {access} = token;

        console.log(token);
        
        const decoded_access_token = jwt_decode(access);
        
        let time = checkTokenExpiry(decoded_access_token.exp);

        console.log(time)
        
        
        access_timer = setTimeout(() => {

            console.log('i am called');
            
            clearTimeout(access_timer);
            dispatch(logout())
            
        },time)
        
        await saveTokenInStorage(token);
        
        console.log('sign in called');
        
        
        dispatch(authenticate({ token: access, userData: token }));
    }
}

const checkExpiry = (access) => {

    const decoded_access_token = jwt_decode(access);

    let time = checkTokenExpiry(decoded_access_token.exp);

    access_timer = setTimeout(() => {

        clearTimeout(access_timer);
        
    },time)

}

const checkTokenExpiry = (token) => {

    let now = new Date();
    let token_exp = new Date(token * 1000);
    return token_exp - now;

}

const logout = () => {

    return async dispatch => {
    
        await AsyncStorage.clear();
        dispatch(userLogout());
    }

}

const signUp = async (data) => {

    try{

        const response = await fetch(`${url}/api/users/`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({...data,username:`${data.first_name} `})
        })
        const message = await response.json();
        Toast.show({
            topOffset:60,
            type:'success',
            text1:"User registration success",
            text2:"Please login to proceed"
        })
    }catch(err){

        Toast.show({
            topOffset:60,
            type:'error',
            text1:`${err}`,
            text2:"Please try again"
        })

    }
    
}

const saveTokenInStorage = async (token) => {

    await AsyncStorage.setItem('userData',JSON.stringify(token))

}

export {signIn, checkExpiry, signUp  };