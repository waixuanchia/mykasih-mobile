import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const PageTitle = (props) => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.title}</Text>

        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        marginBottom:10
    },
    text:{
        fontSize:28,
        color:'#131211',
        fontWeight:'600',
        letterSpacing:0.3
    }
})

export default PageTitle;