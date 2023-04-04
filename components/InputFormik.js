import React from 'react';
import {TextInput,StyleSheet,View,Text} from 'react-native';
import {useField} from 'formik';


const Input = ({name,label, ...props}) => {

    const [field,meta] = useField(name)


    return (

        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputContainer}>
                {
                    props.iconPack && 
                    <props.iconPack name={props.icon} size={24} style={styles.icon} />
                }
                <TextInput {...props} onChangeText={field.onChange(name)} onBlur={field.onBlur(name)} style={styles.input} value={field.value} />

            </View>
            { meta.touched && meta.error &&

                <View style={styles.errorContainer}>
                { 
                    <Text style={styles.errorText}>{meta.error}</Text>
                }

                </View>
            }
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


// const TextInputFormik = ({name,label}) => {

//     const [field,meta] = useField(name)

//     return (
//         <>    
//             <TextInput
//                 placeholder={name}
//                 style={styles.input}
//                 onChangeText={field.onChange(name)}
//                 onBlur={field.onBlur(name)}
//                 value={field.value}
//             />
//         </>
        
//     )

// }

// const styles = StyleSheet.create({

//     input:{
//         width:'100%',
//         paddingHorizontal:10,
//         paddingVertical:6,
//         borderRadius:2,
//         backgroundColor:'#f4f7f8',
//         flexDirection:'row',
//         alignItems:'center'
//     }

// })

// export default TextInputFormik;