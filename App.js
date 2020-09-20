import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './src/Login';
import Home from './src/Home';
import Details from './src/Details';


const AppNavigator = createStackNavigator({
  LoginScreen: { screen: Login },
  HomeScreen: { screen: Home },
  DetailsScreen: { screen: Details }
},
  {
    initialRouteName: 'LoginScreen'
  });

const App = createAppContainer(AppNavigator);
export default App;