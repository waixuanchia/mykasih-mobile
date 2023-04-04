import React,{useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Reports from '../Screens/Reports';
import Appointment from '../Screens/Appointment';
import HomeNavigator from './HomeNavigator';

import UserScreen from '../Screens/UserScreen';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {useSelector,useDispatch} from 'react-redux';
import {getProfile} from '../store/AuthenticationSlice';
import url from '../constant/constant'

const TabNavigator = createBottomTabNavigator();

const MainNavigator = () => {

    const dispatch = useDispatch()

    // const {profile_id} = useSelector((state) => state.auth.userData);
    // const token = useSelector((state) => state.auth.token)

    // console.log(profile_id);

    // useEffect(() => {

    //     const get_profile = async () => {

    //         let data = await fetch(`${url}/api/usersProfile/${profile_id}/`,{
    //             method:'GET',
    //             headers:{
    //             'Authorization':`Bearer ${token}`
    //             }
    //         }).then(res => res.json());
    //         let {user} = data
        

    //         dispatch(getProfile({ userData : {...user,...data,user_id:user.id,profile_id:data.id} }));

    //     }
        

    //     get_profile();

    // },[]);

    return (
        <TabNavigator.Navigator initialRouteName="home" screenOptions={{
            headerShown:false
        }}>
            <TabNavigator.Screen name="home" component={HomeNavigator} options={{
                tabBarLabel:'Home',
                tabBarIcon: () => <Ionicon name="home-outline" color="#555" size={24}  />
            }}  />
            <TabNavigator.Screen name="report" component={Reports} options={{
                tabBarLabel:'Reports',
                tabBarIcon: () => <Ionicon name="document-outline" color="#555" size={24}  />
            }}  />
            <TabNavigator.Screen name="appointment" component={Appointment} options={{
                tabBarLabel:'Appointment',
                tabBarIcon: () => <Ionicon name="calendar-outline" color="#555" size={24}  />
            }} />
            <TabNavigator.Screen name="profile" component={UserScreen} options={{
                tabBarLabel:'Profile',
                tabBarIcon: () => <Ionicon name="person-circle-outline" color="#555" size={24}  />
            }} />

        </TabNavigator.Navigator>
    )

    

}

export default MainNavigator;