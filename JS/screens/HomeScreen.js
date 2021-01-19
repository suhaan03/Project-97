import React, { Component } from 'react'
import {View,StyleSheet,FlatList} from 'react-native'
import MyHeader from '../components/MyHeader'
import {Text,FAB,List} from 'react-native-paper'
import { State } from 'react-native-gesture-handler'


function HomeScreen ({navigation}){
     const notes = useSelector(state=>state)
     const dispatch = useDispatch()
     const addNote = note =>{
       dispatch(addnote(note))
     }
     const deleteNote=id=>dispatch(deletenote(id))
         return(
           <>
           <MyHeader titleText='All Notes'/>
           <View style={styles.container}>
             {notes.length===0?(
             <View style={styles.titlecontainer}>
          <Text style={styles.title}>
            Notes
            </Text>       
             </View>):(
               <FlatList data ={notes}
               renderItem={({item})=>(
                 <List.Item
                 title={item.note.NoteTitle}
                 description={item.note.NoteDescription}
                 descriptionNumberOfLines={1}
                 titleStyle={styles.listTitle}
                 onPress={()=>deleteNote(item.id)}
                 />
               )}
               keyExtractor={item=>item.id.toString()}/>
     )}
             <FAB
             style={styles.fab} 
             small
             icon='plus'
             label='Add a new note.'
             onPress={()=>navigation.navigate('TakeNotes',{addNote})}
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
listTitle:{
  fontSize:20
}
})

export default HomeScreen