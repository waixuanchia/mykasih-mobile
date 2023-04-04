import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './MainNavigator';
import AuthScreen from '../Screens/AuthScreen';
import StartUpScreen from '../Screens/StartUpScreen';
import {useSelector} from 'react-redux';
import Toast from 'react-native-toast-message';


const AppNavigator = () => {

    const token = useSelector((state) => state.auth.token);
    const didTryLogin = useSelector((state) => state.auth.didTryLogin);


    return (
        <NavigationContainer>
            {token && <MainNavigator /> }
            {!token && didTryLogin && <AuthScreen /> }
            {!token && !didTryLogin && <StartUpScreen /> }
            <Toast />
        </NavigationContainer>
    )

}

export default AppNavigator;