import React, {useState,useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {Formik, ErrorMessage } from 'formik';
import {View,Text,StyleSheet,ScrollView,TextInput} from 'react-native';
import PageContainer from '../components/PageContainer';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import PageTitle from '../components/PageTitle';
import ProfileImage from '../components/ProfileImage';
import Input from '../components/InputFormik';
import SubmitButton from '../components/SubmitButton';
import {validateInput} from '../utils/actions/formActions';
import {updateProfile} from '../store/AuthenticationSlice';
import url from '../constant/constant'
import Toast from 'react-native-toast-message';
import {launchImagePicker} from '../utils/ImagePickerHelper';
import validationSchema from '../utils/ProfileValidationSchema';


const UserScreen = () => {

    const token = useSelector((state) => state.auth.token);
    const userData = useSelector((state) => state.auth.userData);
    const user_profile = useSelector((state) => state.auth.user_profile);
    const [img_url,set_img_url] = useState('');
    const [img_64,set_img_64] = useState('');

    const dispatch = useDispatch();


    const imageChangedHandler = async () => {

        const uploadedImage = await launchImagePicker();
        set_img_url(uploadedImage.assets[0].uri)
        set_img_64(uploadedImage.assets[0].base64);
    }

     
    useEffect(() => {  

        async function fetch_profile(){

            let profile = await fetch(`${url}/api/usersProfile/${userData.profile_id}/`,{
                                                method:'GET',
                                                headers:{
                                                    'Authorization': `Bearer ${token}`
                                                }
            });

            let profile_data = await profile.json();
            profile_data = {...profile_data.user,
                        address_line_1:profile_data.address_line_1,
                        address_line_2:profile_data.address_line_2,
                        profile_picture:profile_data.profile_picture,
                        city:profile_data.city}

            set_img_url(profile_data.profile_picture)
            
            
            dispatch(updateProfile({ user_profile : profile_data }))
        }

        fetch_profile();

        return () => {
            dispatch(updateProfile({user_profile: null}))
        }

    },[dispatch])


    const saveHandler = async (values) => {

        const formProfile = new FormData();
        if(img_64 !== ''){

            formProfile.append('profile_picture',img_64);
        }
        formProfile.append('address_line_1',values.address_line_1)
        formProfile.append('address_line_2',values.address_line_2)
        formProfile.append('city',values.city);

        await fetch(`${url}/api/usersProfile/${userData.profile_id}/`,{
                method:'PATCH',
                headers:{
                    
                    'Authorization':`Bearer ${token}`
                },
                body:formProfile
            }).then((response) => {
                console.log(response);
        });

        const formUser = new FormData();

        formUser.append('first_name',values.first_name);
        formUser.append('last_name',values.last_name)
        formUser.append('email',values.email)

        await fetch(`${url}/api/users/${userData.user_id}/`,{
            method:'PATCH',
            headers:{
                'Authorization':`Bearer ${token}`
            }
        }).then(res => res.json());

        Toast.show({
            topOffset:60,
            type:'success',
            text1:"User profile updated successfully",
        })

        dispatch(updateProfile({ user_profile : values }));

    }

    return (
        <PageContainer>
            <ScrollView contentContainerStyle={styles.formContainer}>
                { user_profile &&
  
                <Formik initialValues={user_profile} validationSchema={validationSchema} onSubmit={(values) => {
                    
                    saveHandler(values)
                }
                }>

                    { ({ handleSubmit, handleChange, handleBlur, values, errors }) => (

                        <>
                            <PageTitle title="Profile" />
                        
                            <ProfileImage onChangeImage={imageChangedHandler} src={img_url} />

                            <View style={styles.container}>
                                <Text style={styles.label}>first name</Text>
                                <View style={styles.inputContainer}>
                                     
                                    <FontAwesome name="user-o" size={24} style={styles.icon} />
                                    
                                    <TextInput name="first_name" onChangeText={handleChange('first_name')} onBlur={handleBlur('first_name')} style={styles.input} value={values.first_name} autoCapitalize="none" />

                                </View>
                                <View style={styles.errorContainer}>
                 
                                    <Text style={styles.errorText}>{errors.first_name}</Text>
                
                                </View>

                                
                            </View>

                            <View style={styles.container}>
                                <Text style={styles.label}>last name</Text>
                                <View style={styles.inputContainer}>
                                     
                                    <FontAwesome name="user-o" size={24} style={styles.icon} />
                                    
                                    <TextInput name="last_name" onChangeText={handleChange('last_name')} onBlur={handleBlur('last_name')} style={styles.input} value={values.last_name} autoCapitalize="none" />

                                </View>
                                <View style={styles.errorContainer}>
                 
                                    <Text style={styles.errorText}>{errors.last_name}</Text>
                
                                </View>

                                
                            </View>
                            <View style={styles.container}>
                                <Text style={styles.label}>Email</Text>
                                <View style={styles.inputContainer}>
                                     
                                    <Feather name="mail" size={24} style={styles.icon} />
                                    
                                    <TextInput name="email" onChangeText={handleChange('email')} onBlur={handleBlur('email')} style={styles.input} value={values.email} autoCapitalize="none" />

                                </View>
                                <View style={styles.errorContainer}>
                 
                                    <Text style={styles.errorText}>{errors.email}</Text>
                
                                </View>
                                {/* <ErrorMessage name="email" /> */}

                                
                            </View>

                            <View style={styles.container}>
                                <Text style={styles.label}>address line 1</Text>
                                <View style={styles.inputContainer}>
                                     
                                    <Feather name="mail" size={24} style={styles.icon} />
                                    
                                    <TextInput name="address_line_1" onChangeText={handleChange('address_line_1')} onBlur={handleBlur('address_line_1')} style={styles.input} value={values.address_line_1} autoCapitalize="none" />

                                </View>
                                <View style={styles.errorContainer}>
                 
                                    <Text style={styles.errorText}>{errors.address_line_1}</Text>
                
                                </View>
                                {/* <ErrorMessage name="address_line_1" /> */}

                                
                            </View>

                            <View style={styles.container}>
                                <Text style={styles.label}>address line 2</Text>
                                <View style={styles.inputContainer}>
                                     
                                    <Feather name="mail" size={24} style={styles.icon} />
                                    
                                    <TextInput name="address_line_2" onChangeText={handleChange('address_line_2')} onBlur={handleBlur('address_line_2')} style={styles.input} value={values.address_line_2} autoCapitalize="none" />

                                </View>
                                <View style={styles.errorContainer}>
                 
                                    <Text style={styles.errorText}>{errors.address_line_2}</Text>
                
                                </View>
                                {/* <ErrorMessage name="address_line_2" /> */}

                                
                            </View>

                            <View style={styles.container}>
                                <Text style={styles.label}>city</Text>
                                <View style={styles.inputContainer}>
                                     
                                    <Feather name="mail" size={24} style={styles.icon} />
                                    
                                    <TextInput name="address_line_2" onChangeText={handleChange('city')} onBlur={handleBlur('city')} style={styles.input} value={values.city} autoCapitalize="none" />

                                </View>
                                <View style={styles.errorContainer}>
                 
                                    <Text style={styles.errorText}>{errors.city}</Text>
                
                                </View>
                                {/* <ErrorMessage name="city" /> */}

                                
                            </View>
    
                            <SubmitButton title="save" onPress={handleSubmit}  style={{marginTop:20}}  />
                            </> 
                        )
                    }
                    </Formik>
                    
                    
            }
            </ScrollView>
        </PageContainer>
    )

}

const styles = StyleSheet.create({
    formContainer:{
        alignItems:'center'
    },
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

export default UserScreen;
