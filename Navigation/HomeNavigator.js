import React from 'react';
import Home from '../Screens/Home'
import ReportPage from '../Screens/ReportPage';
import ReportForm from '../components/ReportForm';
import Reports from '../Screens/Reports'

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {

    return (
        <Stack.Navigator initialRouteName="homeIndex">
            <Stack.Screen name="homeIndex" component={Home} options={{ header: () => {} }} />
            <Stack.Screen name="reportForm" component={ReportForm} options={{ headerTitle:'Report Violent Cases'}} />
            <Stack.Screen name="reports" component={Reports} options={{headerTitle:'Check report status'}} />
        </Stack.Navigator>
    )
}

export default StackNavigator;