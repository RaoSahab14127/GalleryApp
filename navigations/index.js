import React from 'react'
import Home from '../screen/home';
import { NavigationContainer } from '@react-navigation/native';
import {
    View,Text
  } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';  
import LockScreen from '../screen/lockScreen';
// Drawar
const Drawer = createDrawerNavigator();
function DrawerGroup() {

  return (
    <Drawer.Navigator
  >
      <Drawer.Screen name="Feed" component={Home} />

    </Drawer.Navigator>
  );
}
function Navigations() {
 
    return (
    <NavigationContainer>
        {true? <LockScreen/> : <DrawerGroup/>}
    </NavigationContainer>
  )
}

export default Navigations