import React from 'react';
import HomeScreen from './screens/HomeSreen'
import SecondScreen from './screens/SecondScreen'
import{createAppContainer,createSwitchNavigator} from 'react-navigation'

export default class App extends React.Component {
  
  render(){
    return (
      <AppContainer/>
    );
  
  }
  
}


var AppNavigator=createSwitchNavigator({
  HomeScreen:HomeScreen,
  SecondScreen:SecondScreen
})

const AppContainer=createAppContainer(AppNavigator);
