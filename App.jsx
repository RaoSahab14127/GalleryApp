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

import { store } from './store'

function App(){

  return (
<Provider store= {store}>
    <Navigations/></Provider>
  );
}

export default App;
