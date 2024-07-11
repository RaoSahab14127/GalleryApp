import {useRoute} from '@react-navigation/native';
import React from 'react';
import {Image, Text, View} from 'react-native';

function FScreen() {
  const route = useRoute();
  const pics = route.params.pic;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image source={pics}></Image>
    </View>
  );
}

export default FScreen;
