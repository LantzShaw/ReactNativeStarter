import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const HomeTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeStack" component={HomeStackScreen} />
    </Tab.Navigator>
  );
};

// NOTE: 如果 home 页面还有 tab 可以这么定义
// const HomeTab = () => {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="test" component={HomeScreen} />
//     </Tab.Navigator>
//   );
// };

const AppStack = createNativeStackNavigator();

const AppNavigationContainer = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen name="HomeTab" component={HomeTab} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigationContainer;
