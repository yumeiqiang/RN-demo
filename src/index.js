// import { createStackNavigator } from 'react-navigation-stack';
// import { createAppContainer } from 'react-navigation';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
import React, {Component} from 'react';

import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation"

// import Icon from 'react-native-vector-icons/FontAwesome';
// import { Ionicons } from 'react-native-vector-icons'
import Ionicons from 'react-native-vector-icons/Ionicons';






import DetailsScreen from './components/DetailsScreen'
import About from './components/About'
import History from './components/history'
import User from './components/user'


const AppNavigator = createBottomTabNavigator({
    Home: {
      screen: DetailsScreen,
      navigationOptions: {
        title: '机构',
        tabBarIcon: ({ tintColor }) => <Ionicons name='md-home' size={25} color={tintColor} />
    }
    },
    Find: {
        screen: User,
        navigationOptions: {
            tabBarLabel: '使用',
            tabBarIcon: ({ tintColor }) => <Ionicons name="md-key" size={25} color={tintColor} />
        }
    },
    About: {
        screen: About,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: ({ tintColor }) => <Ionicons name="md-person" size={25} color={tintColor} />
        }
    }
  }, {
    tabBarOptions: {
        activeTintColor: '#f00',
        showIcon: true
    },
    initialRouteName: 'Home'
  });
  const myApp = createStackNavigator({
      Home: {
          screen: AppNavigator,
          navigationOptions: {
              headerTitle: '万物互联loT',
              headerTintColor: '#000',
              headerStyle: {
                backgroundColor: '#f1f1f1'  
              }
          }
        //   navigationOptions: () => ({
        //     header: null
        //   })
      },
      History: {
          screen: History,
          navigationOptions: {
              headerTitle: '111'
          }
      },
      User: {
          screen: User,
          navigationOptions: {
              headerTitle: '使用'
          }
      }
  })
  
  export default createAppContainer(myApp);