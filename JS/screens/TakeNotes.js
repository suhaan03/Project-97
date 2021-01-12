import React, { Component } from 'react'
import {View,StyleSheet} from 'react-native'
import MyHeader from '../components/MyHeader'
import{Text,IconButton,TextInput,FAB} from 'react-native-paper'
import navigation from '../navigation'
export default class TakeNotes extends Component{
     render(){
         return(
           <View style={styles.container}>
             <View style={styles.titlecontainer}>
          <Text style={styles.title}>
            AddNotesScreen
            </Text>       
             </View>
             <FAB 
             small
             icon='plus'
             label='Add a new note.'
             onPress={()=>navigation}
             />
             </View>
         )
     }
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
}
})
