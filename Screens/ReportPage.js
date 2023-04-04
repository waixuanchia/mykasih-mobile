import React,{useState,useEffect} from 'react';
import {View,Text,TextInput,StyleSheet,Button,ScrollView,TouchableOpacity,Image} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';
import url from '../constant/constant';
import {launchImagePicker} from '../utils/ImagePickerHelper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ReportForm = () => {

    const [selected,setSelected] = useState('');
    const [name,setName] = useState('');
    const [data,setData] = useState([])
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [description,setDescription] = useState('');


    useEffect(() => {

        async function getMinistry(){
            const ministryRes = await fetch(`${url}/api/ministries/`)
            const ministryData = await ministryRes.json()
            
            const list_data = ministryData.map((item) => {
                return { id: item.id, value: item.office}
            })
            
            setData(list_data)

        }
        getMinistry()

    },[])

    const pickImage = async () => {

        const uploadedImage = await launchImagePicker();
        
        setImg(uploadedImage.assets[0].uri)

    }

    const handleSubmit = () => {
        
    }

    return (

        <ScrollView>
            <View>
                <Text style={styles.contactHeading}>Contact Details</Text>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Name</Text>
                    <TextInput style={styles.reportInput} placeholder="Enter Name" value={name} onChangeText={(text) => setName(text)} />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Email</Text>
                    <TextInput style={styles.reportInput} placeholder="Your email" value={email} onChangeText={(text) => setEmail(text)} />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>phone</Text>
                    <TextInput style={styles.reportInput} placeholder="Your contact" value={phone} onChangeText={(text) => setPhone(text)} />
                </View>
                <Text style={styles.contactHeading}>Reporting Details</Text>

                <View style={styles.inputContainer}>
                    <SelectList data={data} setSelected={setSelected} save="value"  />
                </View>

                <View style={styles.inputContainer}>
                    <TouchableOpacity onPress={pickImage}>
                        <Image style={{...styles.image, width:80,height:80}} source={require('../assets/default.jpeg')} />

                        <View style={styles.editIconContainer}>
                            <FontAwesome name="pencil" size={20} color="#333" />
                        </View>
                        
                    </TouchableOpacity>
                </View>
                
                <TextInput placeholder="Enter description" value={description} onChangeText={(text) => setDescription(text)} />
                <Button title="submit" onPress={handleSubmit} />
            </View>
                
        </ScrollView>
        
    )

}

const styles = StyleSheet.create({
    reportForm:{
        margin:6,
        backgroundColor:'#fff',
        borderRadius:1.2

    },
    contactHeading:{
        fontSize:16,
        fontWeight:'700',
        color:'#333'
    },
    inputLabel:{
        fontSize:14,
        fontWeight:'500',
        color:'#5f5f5f'
    },
    inputContainer:{
        margin:5.2
    
    },
    reportInput:{
        borderWidth:2,
        borderColor:'#6f6f6f',
        borderRadius:3.2,
    },
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



export default ReportForm;