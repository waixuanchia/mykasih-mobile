import React, {useState} from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Image,ScrollView,KeyboardAvoidingView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import PageContainer from '../components/PageContainer';
import SignUpForm from '../components/SignUpForm';
import SignInForm from '../components/SignInForm';
import logo from '../assets/logo.png';



const AuthScreen = () => {

    const [isSignUp,setIsSignUp] = useState(false);

    const setSignIn = () => {
        setIsSignUp(false)
    }

    return (
        <SafeAreaView style={styles.safearea}>

            <ScrollView>
                <KeyboardAvoidingView style={styles.keyboardAvoidingView}>


                    <PageContainer>
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={logo} resizeMode="contain" />
                        </View>
                        {
                            isSignUp ? <SignUpForm to={setSignIn} /> : <SignInForm />
                        }

                        <TouchableOpacity onPress={() => setIsSignUp((current) => !current)} style={styles.linkContainer}>
                            <Text style={styles.link}>{`Switch to ${isSignUp ? "sign up" : "sign in"} `}</Text>
                        </TouchableOpacity>
                        
                    </PageContainer>
                </KeyboardAvoidingView>
            </ScrollView>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safearea:{
        flex:1
    },
    linkContainer:{
        justifyContent:'center',
        alignItems:'center',
        marginVertical:15

    },
    link:{
        color:'#12abbf',
        fontWeight:'500',
        letterSpacing:0.3

    },
    imageContainer:{
        justifyContent:'center',
        alignItems:'center',
        height:'10%'
    },
    image:{
        width:'50%'
    },
    keyboardAvoidingView:{
        flex:1,
        justifyContent:'center'

    }
    
})

export default AuthScreen;