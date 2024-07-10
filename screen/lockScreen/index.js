import React from 'react'
import {View, Text, StyleSheet, ScrollView, Dimensions, FlatList,Touchable, TouchableOpacity, Image} from 'react-native'

const {width , height} = Dimensions.get('window')
 const dialPadSize = width*.2
 const dialPadSizeh = height*.2
const dialPad = [1,2,3,4,5,6,7,8,9,"",0,'del']
const pinLength = 6;
function LockScreen() {
    const DialPad = ()=>{
        return (
            <View style={{height: 420 }}>
                <FlatList
                data={dialPad}
                scrollEnabled = {false}
                numColumns={3}
                keyExtractor={(_, index)=>index.toString()}
                columnWrapperStyle={{gap:30}}
                contentContainerStyle={{gap:30}}
                renderItem={
                    ({item})=>{
                        return(
                            <TouchableOpacity onPress={()=>(alert(item))} disabled={item === ""}>
                                <View style={{
                                    width: dialPadSize,
                                    height: dialPadSize,
                                    borderRadius: dialPadSize/2,
                                    borderWidth:1,
                                    alignItems: "center",
                                  
                                    justifyContent:'center'
                                }}> 
                                {item === 'del'? <Image  style={{width: dialPadSize/2,
                                    height: dialPadSize/2}} source={require('../../assets/delete.png')} />: <Text style={{
                                        fontSize: 20,
                                        color: 'black'
                                    }}>{item}</Text>}
                                
                                </View>
                            </TouchableOpacity>  
                        )
                    }
                }
                />
            </View>
        )
    }
  return (
    <View style ={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }} >
        <Text style ={{
            fontSize: 24,
            fontWeight: "bold",
            marginBottom:42,
            textAlign: "center",
            color: "black"
    }}>Login with Passcode</Text>
        <DialPad/>
    </View>
  )
}

export default LockScreen

const styles = StyleSheet.create({

    
})