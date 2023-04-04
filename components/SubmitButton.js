import React from 'react';
import {StyleSheet,TouchableOpacity,Text} from 'react-native';

const SubmitButton = (props) => {

    const enabledBgColor = props.color || '#32d48e';
    const disabledBgColor = '#bdc3c7';
    const bgColor = props.disabled ? disabledBgColor : enabledBgColor;

    return (

        <TouchableOpacity onPress={props.disabled ? () => {} : props.onPress} style={{...styles.button,...props.style,backgroundColor:bgColor}}>
            <Text style={{color: props.disabled ? '#7f8c8d': 'white'}}>{props.title}</Text>
        </TouchableOpacity>

    )

}

const styles = StyleSheet.create({
    button:{
        backgroundColor:'#32d48e',
        paddingHorizontal:30,
        paddingVertical:10,
        borderRadius:4,
        justifyContent:'center',
        alignItems:'center'

    }
})

export default SubmitButton;