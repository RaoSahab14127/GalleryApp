import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {decrement, increment} from '../../store/counterSlice';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  FlatList,
  Touchable,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Login} from '../../api/AuthReducer';
const {width, height} = Dimensions.get('window');
const dialPadSize = width * 0.2;
const dialPadSizeh = height * 0.2;

const dialPad = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'ss', 0, 'del'];
const pinLength = 6;
function LockScreen() {
  const [pincode, setPincode] = useState([]);
  const dispatch = useDispatch();
  // dailpad
  const DialPad = ({onPress}) => {
    return (
      <View style={{height: 420}}>
        <FlatList
          data={dialPad}
          scrollEnabled={false}
          numColumns={3}
          keyExtractor={(_, index) => index.toString()}
          columnWrapperStyle={{gap: 30}}
          contentContainerStyle={{gap: 30}}
          renderItem={({item}) => {
            return (
              // (item ==='del'|| item ==="ss") ? <View style={{
              //     width: dialPadSize,
              //     height: dialPadSize,

              //     alignItems: "center",

              //     justifyContent:'center'}}></View>:
              <TouchableOpacity
                onPress={() => onPress(item)}
                disabled={item === ''}>
                <View
                  style={{
                    width: dialPadSize,
                    height: dialPadSize,

                    alignItems: 'center',

                    justifyContent: 'center',
                  }}>
                  {item === 'del' ? (
                    <Image
                      style={{width: dialPadSize / 2, height: dialPadSize / 2}}
                      source={require('../../assets/delete.png')}
                    />
                  ) : item === 'ss' ? (
                    <Image
                      style={{width: dialPadSize / 2, height: dialPadSize / 2}}
                      source={require('../../assets/fingerprint.png')}
                    />
                  ) : (
                    <Text
                      style={{
                        fontSize: 20,
                        color: 'black',
                      }}>
                      {item}
                    </Text>
                  )}
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        style={{marginBottom: 42, width: dialPadSize, height: dialPadSize}}
        source={require('../../assets/gallery.png')}
      />
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 42,
          textAlign: 'center',
          color: 'black',
        }}>
        Enter Passcode
      </Text>
      <View
        style={{
          flexDirection: 'row',
          gap: 20,
          marginBottom: 40,
          height: 30,
          alignItems: 'flex-end',
        }}>
        {[...Array(pinLength).keys()].map(index => {
          const isSelected = !!pincode[index];
          return (
            <View
              key={index}
              style={{
                width: 22,
                height: isSelected ? 22 : 2,
                borderRadius: 22,
                backgroundColor: 'black',
              }}
            />
          );
        })}
      </View>
      <DialPad
        onPress={item => {
          if (item === 'del') {
            setPincode(precCode => precCode.slice(0, pincode.length - 1));
          } else if (item === 'ss') {
            alert('FingerPrint Oopen');
          } else if (typeof item === 'number') {
            if (pincode.length < pinLength) {
              setPincode(precCode => [...precCode, item]);
            }
          }
          if (pincode.length === 6) {
            dispatch(increment());
          }
        }}
      />
    </View>
  );
}

export default LockScreen;
