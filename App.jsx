/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import configureStores from './store/index'
import Navigations from './navigations';
import {Provider} from 'react-redux'
import {
  View,Text
} from 'react-native';


function App(){

  return (
    <Provider store = {configureStores}>
    <Navigations/></Provider>
  );
}

export default App;
