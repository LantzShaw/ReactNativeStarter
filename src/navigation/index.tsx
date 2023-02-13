import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const HomeTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="home" component={HomeScreen} />
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

const RootStack = createNativeStackNavigator();

const RootStackScreen = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="home" component={HomeTab} />
    </RootStack.Navigator>
  );
};
