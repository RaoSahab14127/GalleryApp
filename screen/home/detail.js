import React from 'react';
import {Dimensions, FlatList, Image, Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
function Gallerydetail({navigation}) {
  const {width, height} = Dimensions.get('window');
  const dialPadSize = width * 0.2;
  const route = useRoute();
  const pics = route.params?.pics;

  return (
    <View
      style={{
        marginTop: 20,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <FlatList
        data={pics}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('screenc', {pic: item})}>
            <Image
              style={{width: dialPadSize, height: dialPadSize}}
              source={item}
            />
          </TouchableOpacity>
        )}
        keyExtractor={item => item}
        columnWrapperStyle={{gap: 10}}
        contentContainerStyle={{gap: 10}}
        numColumns={4}
      />
    </View>
  );
}

export default Gallerydetail;
