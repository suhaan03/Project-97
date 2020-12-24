import React, { Component } from 'react'
import {Text,View,TouchableOpacity} from 'react-native'
import MyHeader from '../components/MyHeader'

export default class HomeScreen extends Component{
     render(){
         return(
             <View>
                 <MyHeader title="My Notes" navigation={this.props.navigation}/>
                
                 <TouchableOpacity style={{width:50,height:50, justifyContent:'center',
                 alignItems:'center',borderRadius:25,backgroundColor:"#ff5722",marginTop:700,
                 marginLeft:350}}
                 onPress ={()=>{
                    this.props.navigation.navigate("SecondScreen")
                  }}>
                 <Text style={{fontSize:50,alignItems:'center',justifyContent:'center'}}>
                     +
                 </Text>
                 </TouchableOpacity>
                 
             </View>
         )
     }
}
