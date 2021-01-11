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
                 <div id="toolbar-container">
    <span class="ql-formats">
      <select class="ql-font"></select>
      <select class="ql-size"></select>
    </span>
    <span class="ql-formats">
      <button class="ql-bold"></button>
      <button class="ql-italic"></button>
      <button class="ql-underline"></button>
      <button class="ql-strike"></button>
    </span>
    <span class="ql-formats">
      <select class="ql-color"></select>
      <select class="ql-background"></select>
    </span>
    <span class="ql-formats">
      <button class="ql-script" value="sub"></button>
      <button class="ql-script" value="super"></button>
    </span>
    <span class="ql-formats">
      <button class="ql-header" value="1"></button>
      <button class="ql-header" value="2"></button>
      <button class="ql-blockquote"></button>
      <button class="ql-code-block"></button>
    </span>
    <span class="ql-formats">
      <button class="ql-list" value="ordered"></button>
      <button class="ql-list" value="bullet"></button>
      <button class="ql-indent" value="-1"></button>
      <button class="ql-indent" value="+1"></button>
    </span>
    <span class="ql-formats">
      <button class="ql-direction" value="rtl"></button>
      <select class="ql-align"></select>
    </span>
    <span class="ql-formats">
      <button class="ql-link"></button>
      <button class="ql-image"></button>
      <button class="ql-video"></button>
      <button class="ql-formula"></button>
    </span>
    <span class="ql-formats">
      <button class="ql-clean"></button>
    </span>
  </div>
  <div id="editor-container"></div>
  <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js"></script>

<script src="//cdn.quilljs.com/1.3.6/quill.min.js"></script>

<script>
   
  var quill = new Quill('#editor-container', {
    modules= {
      syntax: true,
      toolbar: '#toolbar-container'
    }
  });

</script>
             </View>
         )
     }
}
