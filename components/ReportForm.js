import React, {useState, useEffect} from 'react';
import {ScrollView, View, Text, Image, Button, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import {Formik } from 'formik';
import { Picker } from '@react-native-picker/picker';
import Feather from 'react-native-vector-icons/Feather';
import TextInputFormik from './InputFormik';
import { db } from '../config/firebase';
import { v4 } from 'uuid';
import 'react-native-get-random-values';
import {ref, uploadBytes , getDownloadURL} from 'firebase/storage'
import validationSchema from '../utils/ReportValidationSchema';
import {launchImagePicker} from '../utils/ImagePickerHelper';
import DocumentPicker from 'react-native-document-picker';
import {useSelector} from 'react-redux';
import url from '../constant/constant';

const ReportForm = () => {

    const [ministries,setMinistries] = useState([]);
    const [ic_url,set_url] = useState('')
    const [ic_64,set_ic_64] = useState('');
    const [medical_report,set_medical_report] = useState('');
    const [isSubmitting,setIsSubmitting] = useState(false)

    const token = useSelector((state) => state.auth.token);
    const userData = useSelector((state) => state.auth.userData);

    useEffect(() => {

        async function getMinistries(){

            const options = await fetch(`${url}/api/ministries/`,{
                method:'GET',
                headers:{
                    'Content-Type':'application/json'
                }
            });
            const ministry = await options.json();
            const ministry_list = ministry.map(({id,office}) => {
                return { key:`${id}`, label:office, value: `${id}` }
            });
            setMinistries(ministry_list);
        }

        getMinistries();

    },[])

    
    const submit_report = async (values) => {

        const response = await fetch(ic_url)
        let image_blob = await response.blob();
        const imageRef = ref(db,`reports/${v4()}`)
        
        await uploadBytes(imageRef,image_blob);
        const image_url = await getDownloadURL(imageRef);
        console.log(values)

        try{

            setIsSubmitting(true)
            await fetch(`${url}/api/reports/`,{        
                method:'POST',
                headers:{
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({'user_id': userData.user_id, 'image_url': image_url, 'ministry': values.option, 'description': values.description })
            })
    
            setIsSubmitting(false)

        }catch(err){

        }

    }

    const set_card = async () => {

        const image = await launchImagePicker();
        set_url(image.assets[0].uri)
        set_ic_64(image.assets[0].base64);

    }

    const set_medical_report_uri = () => {

    }

    const clear_image = () => {
        set_url('')
    }

    return (
        <>
        <ScrollView>
    <View style={styles.card}> 
          
        <Formik initialValues={{name:'',contact:'',description:'',option:''}} validationSchema={validationSchema} onSubmit={(values) => submit_report(values)}>
            {
                ({handleSubmit, values, handleChange }) => 

                    {

                        return (
                        <ScrollView>
                        <View style={styles.inputWrapper}>
                            <TextInputFormik icon="user"  name="name" label="name" iconPack={Feather} />        

                         </View>
                         <View style={styles.inputWrapper}>
                            <TextInputFormik icon="phone-call" name="contact" label="contact" iconPack={Feather} />        
                                
                         </View>
                         <View style={styles.inputWrapper}>
                            <TextInputFormik icon="clipboard" name="description" label="description" iconPack={Feather} />        

                         </View>  

                         {ministries.length > 0 && <Picker
                            selectedValue={values.option}
                            onValueChange={handleChange('option')}         
                         >

                        {ministries.map((option) => (
                                    <Picker.Item
                                        key={option.value}
                                        label={option.label}
                                        value={option.value}
                                    />
                        ))}

                         </Picker>}

                         <View style={styles.box}>
                            <Text style={styles.textHint}>Upload your MyKad for verification</Text>
                            <TouchableOpacity style={styles.uploadButton} onPress={set_card}>
                                <Text style={styles.buttonText}>Upload</Text>
                            </TouchableOpacity>
                         </View>
                         {
                            ic_url !== '' ? (
                                    <>
                                        <View style={styles.imageContainer}>
                                            <Image style={styles.image} source={{ uri : ic_url }} />
                                        
                                        </View>
                                        <TouchableOpacity style={styles.clearImage} onPress={clear_image}>
                                            <Text>Remove Image</Text>
                                        </TouchableOpacity>
                                    </>
                                    ): <></>
                         }
                         <View style={styles.box}>
                            <Text style={styles.textHint}>Upload your Medical Report, if any</Text>
                            <TouchableOpacity style={styles.uploadButton} onPress={set_card}>
                                <Text style={styles.buttonText}>Upload</Text>
                            </TouchableOpacity>
                         </View>
                         {
                            medical_report !== '' ? (
                                    <>
                                        <View>
                                            <Image  source={{ uri : medical_report }} />
                                            <TouchableOpacity>
                                                <Text>Remove Image</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </>
                                    ): <></>
                         }
                         
                        <View style={styles.buttonContainer}>
                            {
                                isSubmitting ? <ActivityIndicator size="large" color="#12abff" /> :
                                <TouchableOpacity style={styles.submitButton} title="submit" onPress={handleSubmit} >
                                    <Text style={styles.buttonText}>Submit</Text>                
                                </TouchableOpacity>
                            }
                                  
                        </View>
                    </ScrollView>)
                }
                
            }
        </Formik>
        </View> 
        </ScrollView>
        
    </>
    )

}

const styles = StyleSheet.create({

    card:{
        width:'96%',
        backgroundColor:'#fff',
        padding:12,
        alignSelf:'center',
        marginTop:12,
        borderRadius:3,
    },

    inputWrapper:{
        minHeight:30,
        paddingVertical:2,
        paddingHorizontal:36,
        marginVertical:12,
        justifyContent:'center',
        alignItems:'center',        
    },
    buttonContainer:{
        width:200,
        alignSelf:'center'
    },
    box:{
        padding:10,
    },
    textHint:{
        fontWeight:'500',
        color:'#555'
    },
    uploadButton:{
        width:'80%',
        height:30,
        alignSelf:'center',
        justifyContent:'center',
        backgroundColor:'#12abff',
        borderRadius:12,

    },
    buttonText:{
        color:'#fff',
        
        fontWeight:'500',
        textAlign:'center'
    },
    imageContainer:{
        flex:1,
        
        alignItems:'center',
    },
    image:{
        width:200,
        height:200,
    },
    clearImage:{
        flex:1,
        alignItems:'center',
    },

    submitButton:{

        
        backgroundColor:'#12abff',
        borderRadius:3,
        marginTop:12,
        height:32,
        justifyContent:'center'
    }

})

export default ReportForm;