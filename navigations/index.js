import React from 'react';
import Home from '../screen/home';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import LockScreen from '../screen/lockScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Gallerydetail from '../screen/home/detail';
import {Image, Pressable} from 'react-native';
import FScreen from '../screen/home/FScreen';
// Drawar
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
function HomeGroup({navigation}) {
  return (
    <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
      <Stack.Screen
        name="Gallery"
        component={Home}
        options={{
          headerLeft: () => (
            <Pressable onPress={() => navigation.openDrawer()}>
              <Image
                source={require('../assets/images/image-40.jpg')}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 100,
                  marginLeft: 0,
                }}
              />
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name="DetailScreen"
        component={Gallerydetail}
        options={({route}) => ({title: route.params.header})}
      />
      <Stack.Screen name="screenc" component={FScreen} />
    </Stack.Navigator>
  );
}
function DrawerGroup() {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Main" component={HomeGroup} />
    </Drawer.Navigator>
  );
}

function Navigations() {
  return (
    <NavigationContainer>
      {true ? <LockScreen /> : <DrawerGroup />}
    </NavigationContainer>
  );
}

export default Navigations;
