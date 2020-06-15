/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, TouchableOpacity, I18nManager} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Login from './Views/Login';
import MainScreen from './Views/MainScreen';
import Test from './Views/Test';
import History from './Views/History';

const Drawer = createDrawerNavigator();

function Navigation({navigation}) {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Details"
          component={MainScreen}
          options={{
            title: I18nManager.isRTL ? 'الصفحة الرئيسية' : 'Home Page',
            headerStyle: {
              backgroundColor: '#006837',
            },
            headerTintColor: '#fff',
            headerLeft: () => (
              <TouchableOpacity>
                <Image
                  source={require('./images/menu.png')}
                  style={{height: 17, width: 25, marginLeft: 10}}
                />
              </TouchableOpacity>
            ),
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Drawer.Screen
          name="stastics"
          component={History}
          options={{
            title: I18nManager.isRTL ? 'الفحوصات الأخيرة' : 'history',
            headerStyle: {
              backgroundColor: '#006837',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Drawer.Screen
          name="Home"
          component={Login}
          options={{
            title: I18nManager.isRTL ? 'تسجيل خروج' : 'Logout',
            headerStyle: {
              backgroundColor: '#006837',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Drawer.Screen
          name="Test"
          component={Test}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#006837',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
