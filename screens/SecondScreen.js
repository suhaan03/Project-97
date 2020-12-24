import React, { Component } from 'react'
import {Text,View,TouchableOpacity,TextInput,StyleSheet} from 'react-native'
import MyHeader from '../components/MyHeader'

export default class SecondScreen extends Component{
     render(){
         return(
             <View>
                   <TextInput
          style={styles.formTextInput}
          placeholder ={"Title"}
          maxLength ={8}
          onChangeText={(text)=>{
            this.setState({
              firstName: text
            })
          }}
        />
       <TextInput
          style={styles.formTextInput}
          placeholder ={"Notes"}
          multiline={true}
          onChangeText={(text)=>{
            this.setState({
              firstName: text
              
            })
          }}
        />
                
                 <TouchableOpacity style={{width:150,height:50, justifyContent:'center',
                 alignItems:'center',backgroundColor:"#ff5722",marginTop:700,
                 marginLeft:350}}
                 onPress ={()=>{
                    this.props.navigation.navigate("HomeScreen")
                  }}>
                 <Text style={{fontSize:50,alignItems:'center',justifyContent:'center'}}>
                     Save
                 </Text>
                 </TouchableOpacity>

                 <TouchableOpacity style={{width:150,height:50, justifyContent:'center',
                 alignItems:'center',backgroundColor:"#ff5722",marginTop:700,
                 marginLeft:350}}>
                   <Text>
                     Paint
                   </Text>
                 </TouchableOpacity>

                 <TouchableOpacity style={{width:150,height:50, justifyContent:'center',
                 alignItems:'center',backgroundColor:"#ff5722",marginTop:700,
                 marginLeft:350}}>
                   <Text>
                     Text
                   </Text>
                 </TouchableOpacity>
                 <TouchableOpacity style={{width:150,height:50, justifyContent:'center',
                 alignItems:'center',backgroundColor:"#ff5722",marginTop:700,
                 marginLeft:350}}>
                   <Text>
                     Add Photo
                   </Text>
                 </TouchableOpacity>
             </View>
         )
     }
}

const styles = StyleSheet.create({
  formTextInput: {
    width: 100,
    borderWidth:1,
    borderRadius:2,
    borderColor:"white",
  
  },
 
 
});

