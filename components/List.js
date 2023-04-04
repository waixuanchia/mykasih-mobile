import React from 'react';
import {View,Text,FlatList,StyleSheet} from 'react-native';
import Card from './Card';

const List = ({navigation}) => {

    const Data = [
        {
            title:'hi'
        },
        {
            title:'ho'
        },
        {
            title:'ha'
        },
    ]

    return (

        <FlatList style={styles.flatList}  data={Data} renderItem={({item}) => <Card item={item} navigation={navigation} />}
            horizontal={true}
        />
    )

}

const styles = StyleSheet.create({
    flatList:{
        flexGrow:0,
        marginTop:12,
        marginLeft:16,
        paddingVertical:6,
        paddingHorizontal:6, 
        marginBottom:3.6
    }
})

export default List;