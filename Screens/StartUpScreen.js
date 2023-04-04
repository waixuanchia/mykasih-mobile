import React, {useEffect} from 'react';
import {View,ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { setDidTryAutoLogin } from '../store/AuthenticationSlice';
import {authenticate} from '../store/AuthenticationSlice';
import jwt_decode from 'jwt-decode';


const StartUpScreen = () => {

    const dispatch = useDispatch();

    useEffect(() => {

        const tryLogin = async () => {

            const userData = await AsyncStorage.getItem('userData');
            const data = JSON.parse(userData);

            if(!userData){

                console.log("You are not logged in")
                dispatch(setDidTryAutoLogin())    
                return;

            }

            const {access,user_id} = data;
            
            const {exp} = jwt_decode(access)

            
            const expiry = new Date(exp * 1000);

            console.log(expiry);
            
            if(expiry <= new Date() || !access || !user_id){
                dispatch(setDidTryAutoLogin())
                return;
            }
            
            dispatch(authenticate({token: access, userData: data}));

        }

        tryLogin();

    },[dispatch])

    return (
        <View>
            <ActivityIndicator />
        </View>
    )

}

export default StartUpScreen;