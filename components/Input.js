import React,{useState} from 'react';
import {View,Text,StyleSheet,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'


const Input = (props) => {

    const [value,setValue] = useState(props.initialValue);

    const onChangeTextHandler = (text) => {
        setValue(text);
        props.onChangedText(props.id,text);
    }

    return (

        <View style={styles.container}>
            <Text style={styles.label}>{props.label}</Text>
            <View style={styles.inputContainer}>
                {
                    props.iconPack && 
                    <props.iconPack name={props.icon} size={24} style={styles.icon} />
                }
                <TextInput {...props} onChangeText={onChangeTextHandler} style={styles.input} value={value} />

            </View>
            <View style={styles.errorContainer}>
                {
                    props.errorText && 
                    <Text style={styles.errorText}>{props.errorText}</Text>
                }

            </View>
        </View>

    )

}

const styles = StyleSheet.create({
    container:{
        width:'100%'
    },
    label:{
        marginVertical:8,
        fontSize:16,
        fontWeight:'700',
        letterSpacing:0.3,
        color:'#1c1e21'

    },
    inputContainer:{
        width:'100%',
        paddingHorizontal:10,
        paddingVertical:6,
        borderRadius:2,
        backgroundColor:'#f4f7f8',
        flexDirection:'row',
        alignItems:'center'


    },
    icon:{
        marginRight:25,
        color:'#7f8c8d'
    },
    input:{
        color:'#1c1e21',
        // fontSize:15,
        fontWeight:'500',
        flex:1,
        letterSpacing:0.3,
        paddingTop:0
    },
    errorContainer:{
        marginVertical:5

    },
    errorText:{
        color:'red',
        fontSize:13,
        fontWeight:'500',
        letterSpacing:0.3

    }

})

export default Input;