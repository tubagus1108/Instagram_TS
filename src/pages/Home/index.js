import React, { useEffect, useState } from 'react'
import {Text, View, TouchableOpacity} from 'react-native'
import BackgroundJob from "react-native-background-job";

const Home = ({route, navigation}) => {
    const regularJobKey = "regularJobKey";

    const back = () => {
        BackgroundJob.register({
        jobKey: regularJobKey,
        job: () => {
            
            console.log("Background Service is Running")
        
        }
        });
    }

    return (
        <View style={{justifyContent:'center', alignItems:'center', flex:1}}>
            <Text>Selamat datang : </Text>
            <TouchableOpacity onPress={() => {back()}} style={{width:100, height:50, borderRadius:20, marginTop:20, backgroundColor:'blue', justifyContent:'center', alignItems:'center'}}>
                <Text style={{color:'#fff'}}>Kembali</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home