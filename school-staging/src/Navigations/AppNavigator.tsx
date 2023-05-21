import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RNBootSplash from 'react-native-bootsplash';

import TabNavigator from './TabNavigator';
import ScreenNames from '@Constants/ScreenNames';
import HomeScreen from '@Screens/HomeScreen';
import LoginScreen from '@Screens/LoginScreen';
import CheckinScreen from '@Screens/CheckinScreen';
import CheckinHistoryScreen from '@Screens/CheckinHistoryScreen';
import AccountScreen from '@Screens/AccountScreen';
import TeacherListScreen from '@Screens/TeacherListScreen';
import TopicListScreen from '@Screens/TopicListScreen';
import TeacherDetailScreen from '@Screens/TeacherDetailScreen';
import UpdateAccountScreen from '@Screens/UpdateAccountScreen';
import RegisterScreen from '@Screens/RegisterScreen';
import TopicDetailScreen from '@Screens/TopicDetailScreen';
import RegisterTopicScreen from '@Screens/RegisterTopicScreen';
import ConversationListScreen from '@Screens/ConversationListScreen';
import ConversationDetailScreen from '@Screens/ConversationDetailScreen';

const MainStack = createNativeStackNavigator();

const MainScreenStack = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <MainStack.Screen name={ScreenNames.Login} component={LoginScreen} />
      <MainStack.Screen
        name={ScreenNames.Register}
        component={RegisterScreen}
      />
      <MainStack.Screen name={ScreenNames.MainTab} component={TabNavigator} />
      <MainStack.Screen name={ScreenNames.Home} component={HomeScreen} />
      <MainStack.Screen name={ScreenNames.Account} component={AccountScreen} />
      <MainStack.Screen name={ScreenNames.Checkin} component={CheckinScreen} />
      <MainStack.Screen
        name={ScreenNames.CheckinHistory}
        component={CheckinHistoryScreen}
      />
      <MainStack.Screen
        name={ScreenNames.TeacherList}
        component={TeacherListScreen}
      />
      <MainStack.Screen
        name={ScreenNames.TopicList}
        component={TopicListScreen}
      />
      <MainStack.Screen
        name={ScreenNames.TeacherDetail}
        component={TeacherDetailScreen}
      />
      <MainStack.Screen
        name={ScreenNames.UpdateAccount}
        component={UpdateAccountScreen}
      />
      <MainStack.Screen
        name={ScreenNames.TopicDetail}
        component={TopicDetailScreen}
      />
      <MainStack.Screen
        name={ScreenNames.RegisterTopic}
        component={RegisterTopicScreen}
      />
      <MainStack.Screen
        name={ScreenNames.ConversationList}
        component={ConversationListScreen}
      />
      <MainStack.Screen
        name={ScreenNames.ConversationDetail}
        component={ConversationDetailScreen}
      />
    </MainStack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer onReady={() => RNBootSplash.hide({fade: true})}>
      <MainScreenStack />
    </NavigationContainer>
  );
};

export default AppNavigator;
