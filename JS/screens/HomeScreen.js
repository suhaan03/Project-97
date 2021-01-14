import React, { Component } from 'react'
import {View,StyleSheet,FlatList} from 'react-native'
import MyHeader from '../components/MyHeader'
import {Text,FAB,List} from 'react-native-paper'


function HomeScreen ({navigation}){
     
         return(
           <>
           <MyHeader titleText='All Notes'/>
           <View style={styles.container}>
             <View style={styles.titlecontainer}>
          <Text style={styles.title}>
            Notes
            </Text>       
             </View>
             <FAB
             style={styles.fab} 
             small
             icon='plus'
             label='Add a new note.'
             onPress={()=>navigation.navigate('TakeNotes')}
             />
             </View>
             </>
         )
     }

const styles =StyleSheet.create({
  container:
  {
  flex:1,
  backgroundColor:"white",
  paddingVertical:10,
  paddingHorizontal:10,
},
titleContainer:
{
  alignItems:"center",
  justifyContent:"center",
  flex:1,
},
title:
{
  fontSize:30,
},
fab:
{
  position:'absolute',
  margin:20,
  right:0,
  bottom:10,
  backgroundColor:"red"
},
})

export default HomeScreen