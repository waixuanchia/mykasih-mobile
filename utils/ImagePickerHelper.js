import * as ImagePicker from 'react-native-image-picker';
import {Platform} from 'react-native';

const launchImagePicker = async () => {

    const image = await ImagePicker.launchImageLibrary({mediaType:'photo',includeBase64:true},(response) => {
        if(response.didCancel){
            
                console.log('User cancelled image picker');
        } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
        } else {

        } 
        
    })

    return image;

}

export {launchImagePicker};

const checkMediaPermissions = async () => {
    if(Platform.OS !== 'web'){
        
    }
}