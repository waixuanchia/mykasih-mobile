import React, { useEffect, useState } from 'react';
import {View,Text,StyleSheet,ScrollView,TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {v4} from 'uuid';
import url from '../constant/constant';

const Reports = () => {

    const [reports,setReports] = useState([])

    useEffect(() => {

        const fetchReports = async () => {

            const res = await fetch(`${url}/api/reports`);
            const report_element = await res.json()
            setReports(report_element)
            
        }

        fetchReports()


    },[])

    return (
        <ScrollView style={styles.scrollview}>
            <View style={styles.tabContainer}>
                <TouchableOpacity style={{...styles.tab}}>
                    <Text>
                        Pending

                    </Text>        
                </TouchableOpacity> 
                <TouchableOpacity style={styles.tab}>
                    <Text>
                        Accepted        
                    </Text>
                </TouchableOpacity >
                <TouchableOpacity style={styles.tab}>
                    <Text>
                        Rejected    
                    </Text>
                </TouchableOpacity>
            </View>
            
            {reports.map((report) => (
                <View style={styles.reportContainer}>
                    <View>
                        <Text>{v4()}</Text>
                    </View>
                    <View>
                        <Text>{report.user.email}</Text>
                    </View>
                    <View style={styles.reportAgencies}>
                        <Text>{report.ministry.office}</Text>
                    </View>
                    <View>
                        <Text>{report.description}</Text>
                    </View>
                    <View style={styles.reportStatus}>
                        <Text style={styles.statusText}>Pending</Text>
                    </View>
                </View>
            ))
            }
        </ScrollView>
    )

}

const styles = StyleSheet.create({
    scrollview:{
        backgroundColor:'#fff'
    },
    tabContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:6,
        paddingVertical:12,    
    },
    tab:{

        borderWidth:1,
        borderColor:'#12abff',
        paddingVertical:6,
        paddingHorizontal:16,
        borderRadius:3,
        
    },
    reportContainer:{
        elevation:5,
        marginHorizontal:8,
        marginVertical:6,
        backgroundColor:'#fff',
        shadowColor:'#555',
        shadowRadius:2,
        paddingVertical:6,
        paddingHorizontal:8,
        position:'relative'
    },
    report_id:{
        marginBottom:12,
    },
    reportName:{
        fontSize:16,
        fontWeight:'600',
        color:'#3f3f3f'
    },
    reportAgencies:{
        fontSize:14,
        fontWeight:'500',
        color:'#5f5f5f',
        marginBottom:6
    },
    statusText:{
        fontSize:14,
        fontWeight:'500',
        color:'#fff'
    },
    reportStatus:{
        backgroundColor:'#cfa128',
        borderRadius:3.6,
        position:'absolute',
        right:3,
        top:2,
        paddingVertical:1.2,
        paddingHorizontal:3.6
    }

})

export default Reports;