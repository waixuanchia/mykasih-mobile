import React from 'react';
import {View,Text,StyleSheet,Button,TouchableOpacity,Dimensions,Image} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Octicon from 'react-native-vector-icons/Octicons';
import Materialicon from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {LinearGradient} from 'react-native-linear-gradient';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";

const chartConfig = {
    backgroundGradientFrom: "#9796f0",
    backgroundGradientFromOpacity: 0.1,
    backgroundGradientTo: "#fff",
    backgroundGradientToOpacity: 1,
    color: (opacity = 1) => `rgba(25, 35, 50, ${opacity})`,
    //color: (opacity = 1) => `rgba(23, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };


const Header = (props) => {

    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
            color: (opacity = 1) => `rgba(25, 35, 50, ${opacity})`, // optional
            strokeWidth: 2 // optional
          }
        ],
        legend: ["counselling attended"] // optional
    };
    const screenWidth = Dimensions.get("window").width;

    return (

        <View style={styles.scrollView}>
            
            
            <View style={styles.header}>

                <Image style={styles.profile}  source={require('../assets/default.jpeg')} />
                
                <View style={styles.headerTable}>
                    <TouchableOpacity style={styles.touchableOpacity} onPress={() => {
            
                        props.navigation.navigate('reportForm')
                    }}>
                        <Octicon name="report" color="#60F7BA" size={32} />
                        <Text style={styles.heading}>Report</Text>    
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchableOpacity}>
                        <Materialicon name="support-agent" color="#60F7BA" size={32} />
                        <Text style={styles.heading}>Counselling</Text>    
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchableOpacity}>
                        <Ionicon name="newspaper-outline" color="#60F7BA" size={32} />
                        <Text style={styles.heading}>Spot the sign</Text>    
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchableOpacity}>
                        <Feather name="activity" color="#60F7BA" size={32} />   
                        <Text style={styles.heading}>Mood-boosting</Text> 
                    </TouchableOpacity>

                    
                </View>
            </View>
            <View style={styles.cardContainer}>
                <View style={{...styles.card,marginRight:12}}>
                    <Text style={styles.cardHeading}>Total cases reported</Text>
                    <Text style={styles.cardValue}>12</Text>
                    <AntDesign style={styles.icon} name="folder1" color="#60F7DC" size={26} />
                    
                    

                </View>
                <View style={styles.card}>
                    <Text style={styles.cardHeading}>Total cases reported</Text>
                    <Text style={styles.cardValue}>2</Text>
                    <Entypo style={styles.icon} name="browser" color="#60F7DC" size={26} />

                </View>
            </View>
            <View style={styles.chartContainer}>

                <LineChart
                    style={{marginLeft:12,marginRight:12}}
                    data={data}
                    width={screenWidth}
                    height={220}
                    chartConfig={chartConfig}
                />
            </View>
            <View style={{...styles.cardContainer,marginTop:10}}>
                <View style={{...styles.card,marginRight:12}}>
                    <Text style={styles.cardHeading}>Check appointment</Text>
                    <Button style={styles.cardButton} title="check" />
                    
                </View>
                <View style={styles.card}>
                    <Text style={styles.cardHeading}>Check report status</Text>
                    <Button style={styles.cardButton} onPress={() => props.navigation.navigate('reports')} title="check" />

                </View>
            </View>
            

        </View>

    )
}

const styles = StyleSheet.create({
    scrollView:{
        flex:1,
    },
    profile:{
        width:50,
        height:50,
        alignSelf:'flex-end',
        borderRadius:60,
        
        top:30,
        right:20,
    },
    header:{

        position:'relative',
        height:160,
        backgroundColor:'#02DF88',
        alignItems:'center'

    },
    headerTable:{
        width:'95%',
        position:'absolute',
        flexDirection:'row',
        backgroundColor:'#fff',
        height:100,
        bottom:'-30%',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:6,
        

        // elevation:10,
        // shadowColor:'#3f3f3f',
        
        borderRadius:2,
        // shadowOffset:{
        //     width:10,
        //     height:10
        // },
        // shadowRadius:10
    },
    touchableOpacity:{
        
        padding:12,
        justifyContent:'center',
        alignItems:'center'
        
        
    },
    heading:{
        fontSize:13,
        fontWeight:'500'
    },
    cardContainer:{
        marginTop:60,
        flexDirection:'row',
        paddingHorizontal:12,
        marginBottom:16
        
    },
    card:{
        flex:1,
        backgroundColor:'#fff',
        borderRadius:2,
        elevation:10,
        paddingVertical:12,
        paddingHorizontal:6,
    },
    cardHeading:{
        fontSize:16,
        fontWeight:'700',
        marginBottom:16,
        
        color:'#333',
    },
    cardValue:{
        fontSize:15,
        fontWeight:'700',
        color:'#555'
    },
    icon:{
        position:'absolute',
        bottom:12,
        right:8
    },
    chartContainer:{
        paddingHorizontal:6,
        alignItems:'center'
    },
    cardButton:{
        width:30
    }



})

export default Header;