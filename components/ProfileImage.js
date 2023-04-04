import React from 'react';
import {View,Text,Image,StyleSheet,TouchableOpacity} from 'react-native';
import profile_picture from '../assets/default.jpeg';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const ProfileImage = ({src,onChangeImage}) => {



    let profile = src !== '' ? { uri : src } : profile_picture;

    return (
        <TouchableOpacity onPress={onChangeImage}>
            <Image style={{...styles.image, width:80,height:80}} source={profile} />

            <View style={styles.editIconContainer}>
                <FontAwesome name="pencil" size={20} color="#333" />
            </View>
            
        </TouchableOpacity>
    )
    
}

const styles = StyleSheet.create({
    image:{
        borderRadius:50,
        borderColor:'#555',
        borderWidth:1
    },
    editIconContainer:{
        position:'absolute',
        bottom:0,
        right:0,
        backgroundColor:'#bfbfbf',
        padding:6,
        borderRadius:50
    }

})

export default ProfileImage;