import React, { Component, useState } from 'react'
import {View,StyleSheet} from 'react-native'
import MyHeader from '../components/MyHeader'
import{Text,IconButton,TextInput,FAB} from 'react-native-paper'
import navigation from '../navigation'

function AddNotes({navigation}){
  const [NoteTitle,SetNoteTitle]=useState('')
  const [NoteDescription,SetNoteDescription]=useState('')
  function saveNotes(){
    navigation.space.params.addNote({NoteTitle,NoteDescription})
    navigation.goBack()
  }

         return(
           <>
               <MyHeader titleText='Add a New'/>
           <IconButton icon="close" size={25} color='white' onPress={()=>navigation.goBack()}
           style={styles.IconButton}
           />
               <View style={styles.container}>
                 <TextInput label="Title"
                 value="NoteTitle"
                 mode='outlined'
                 onChangeText={SetNoteTitle}
                 style={styles.title}
                 />
                 <TextInput label="Note"
                 value="NoteDescription"
                 mode='flat'
                 onChangeText={SetNoteDescription}
                 style={styles.text}
                 multiline={true}
                 scrollEnabled={true}
                 returnKeyLabel='done'
                 blurOnSubmit={true}
                 />

            
             <FAB  style={styles.fab}
             small
             icon='check'
            disabled={NoteTitle==''?true:false}
             onPress={()=>saveNotes()}
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
  fontSize:24,
  marginBottom:16,
},
text:
{
  height:300,
  fontSize:16,
},
fab:
{
  position:'absolute',
  margin:20,
  right:0,
  bottom:10,
  backgroundColor:"red"
}
})

export default AddNotes