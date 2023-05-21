import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import TabBar from '@Components/TabBar';
import ScreenNames from '@Constants/ScreenNames';
import HomeScreen from '@Screens/HomeScreen';
import AccountScreen from '@Screens/AccountScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator(nav: NativeStackScreenProps<any>) {
  nav;
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name={ScreenNames.Home} component={HomeScreen} />
      <Tab.Screen name={ScreenNames.Account} component={AccountScreen} />
    </Tab.Navigator>
  );
}
