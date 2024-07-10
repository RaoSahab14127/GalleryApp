import React from 'react'
import Home from '../screen/home';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';  
import LockScreen from '../screen/lockScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Drawar
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
function HomeGroup() {
    return (
        <Stack.Navigator  screenOptions={{headerShown:false}} >
            <Stack.Screen name='Home' component={Home} />
        </Stack.Navigator>
    )
  }
function DrawerGroup() {

  return (
    <Drawer.Navigator screenOptions={{ headerTitleAlign: "center"}}
  >
      <Drawer.Screen name="Gallery" component={HomeGroup} />

    </Drawer.Navigator>
  );
}

function Navigations() {
 
    return (
    <NavigationContainer>
        {false? <LockScreen/> : <DrawerGroup/>}
    </NavigationContainer>
  )
}

export default Navigations