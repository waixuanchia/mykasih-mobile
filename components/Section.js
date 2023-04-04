import React from 'react';
import {View,Text,StyleSheet,ImageBackground,Image,Button,TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-ionicons';

const Section = ({sectionData:{title,description,imageSource,page},navigation}) => {
    
    return (
        <View style={styles.section}>

            <ImageBackground style={styles.backgroundImage} resizeMode="contain" source={imageSource}>
            </ImageBackground>
                <Text style={styles.heading}>{title}</Text>
                <View style={styles.card}>
                    <View style={styles.textBox}>

                        <Text style={styles.cardText}>{description}</Text>
                    </View>
                    <TouchableOpacity style={styles.touchableWrap} onPress={() => navigation.navigate(page)}>
                        <Image style={styles.imageIcon} source={require('../assets/icons8-right-arrow-48.png')} />
                    </TouchableOpacity>
                </View>        
        </View>
    )
}

const styles = StyleSheet.create({
    section:{
        
        elevation:12,
        shadowColor:'#000',
        backgroundColor:'#fff',
        marginHorizontal:12,
        borderRadius:2,
        paddingHorizontal:6,
        paddingVertical:8,
        height:100,
        position:'relative',
        marginBottom:12
            
    },
    backgroundImage:{
        flex:1,
        width:100,
        height:100,
        position:'absolute',
        right:0
    },
    heading:{
        fontSize:16,
        fontWeight:'700',
        color:'#333'
    },
    card:{
        flexDirection:'row',
        width:180,
        elevation:5,
        shadowColor:'#333',
        shadowOpacity:0.2,
        backgroundColor:'#efffff',
        position:'absolute',
        alignItems:'center',
        bottom:12,
        left:6,
        paddingVertical:2.2,
        paddingHorizontal:3.6
        
    },
    textBox:{
        flex:1

    },
    cardText:{
        fontSize:14,
        fontWeight:'500',
        color:'#555',
    },
    touchableWrap:{
        elevation:5,
        width:32,
        height:32,
        backgroundColor:"#fff",
        borderRadius:100, 
        justifyContent:'center',
        alignItems:'center'
    },
    imageIcon:{
        width:18,
        height:18
    }
});

export default Section;