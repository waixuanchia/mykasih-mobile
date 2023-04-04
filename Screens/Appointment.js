import React from 'react';
import {View,Text,ScrollView,StyleSheet} from 'react-native';
import {BookingCalendar} from 'react-native-booking-calendar';
import {DateTime} from 'luxon';


const Appointment = () => {

  const startDate = DateTime.local(2021, 3, 12).setLocale('us');
  const startTime = new Date();
  startTime.setHours(9);
  startTime.setMinutes(30);
  const endTime = new Date();
  endTime.setHours(19);
  endTime.setMinutes(0);

  const onButtonPress = (d) => {
    console.log(d);
  };
  const dateTimeObj = {
    '2021-3-14': {
      '12:00': { row: <Text>o</Text>, onPress: onButtonPress },
      '13:00': { row: <Text>Tel</Text>, onPress: onButtonPress },
    },
  };

  const defaultRow = {
    row: <Text>x</Text>,
    onPress: onButtonPress,
  };
    return (
        <ScrollView>
            <View style={styles.headerContainer}>
                <Text style={styles.appointmentHeading}>Schedule counselling appointment</Text>
            </View>
            <View style={styles.appointmentCalendar}>
                <BookingCalendar
                    
                    defaultRow={defaultRow}
                    startDate={startDate}
                    startTime={startTime}
                    endTime={endTime}
                    intervalMinutes={30}
                    dateTime={dateTimeObj}
                    backgroundColor="#fff"
                    borderColor="#333"
                    fontColor="#3f3f3f"
                    margin="12"
                    />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    headerContainer:{
        marginTop:6,
        marginBottom:12
    },
    appointmentHeading:{
        fontSize:14,
        fontWeight:'600',
        color:'#3f3f3f'
    },
    appointmentCalendar:{
        margin:6
    }
})

export default Appointment;