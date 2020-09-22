import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import RestaurantDetails from './src/screens/RestaurantDetails';

const navigator = createStackNavigator({
  Home: HomeScreen,
  ResDetails: RestaurantDetails
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'Restaurant Search'
  }
});

export default createAppContainer(navigator);