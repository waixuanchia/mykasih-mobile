import React from 'react';
import {View,Text,TouchableOpacity,ImageBackground,StyleSheet,Image} from 'react-native';

const Card = ({navigation}) => {


    return (
        <View style={styles.elevation}>
            <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('reports')} >
                <Image style={styles.image} source={require('../assets/icons8-graph-report-96.png')}  />
                <Text>View Report</Text>
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    elevation:{
        elevation:12,
        backgroundColor:'#fff',
        shadowColor:'#000',
        shadowOpacity:0.5,
        shadowRadius:5,
        marginRight:36,
        height:200,
        justifyContent:'center'
        
    },
    container:{
        paddingVertical:1.2,
        paddingHorizontal:2.4,
        position:'relative',
        alignItems:'center',     
        
    },
    image:{
        width:160,
        height:160
    }
})

export default Card;