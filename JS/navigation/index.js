import{createAppContainer} from 'react-navigation'
import{createStackNavigator} from 'react-navigation-stack'
import HomeScreen from '../screens/HomeScreen'
import TakeNotes from '../screens/TakeNotes'


const StackNavigator=createStackNavigator({
    HomeScreen:{
        screen:HomeScreen
    },
    TakeNotes:{
        screen:TakeNotes
    },


},
{initialRouteName:'HomeScreen',
headerMode:'none',
mode:'modal'}
)


export default createAppContainer(StackNavigator);
