import React from 'react'
import {View, Text, Image, Dimensions, FlatList} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
const {width , height} = Dimensions.get('window')
 const dialPadSize = width*.4
 const ci1 = require('../../assets/images/image-10.jpg');
 const ci2 = require('../../assets/images/image-20.jpg');
 const ci3 = require('../../assets/images/image-30.jpg');
 const ci4 = require('../../assets/images/image-40.jpg');
 const ci5 = require('../../assets/images/image-50.jpg');
 const ci6 = require('../../assets/images/image-60.jpg');
 const ci7 = require('../../assets/images/image-70.jpg');
 const ci8 = require('../../assets/images/image-10.jpg');
 const ci9 = require('../../assets/images/image-10.jpg');
 const ci10 = require('../../assets/images/image-10.jpg');   
const piclist = [{'folderName': "Camera", data: [ci1, ci2,ci3,ci4,ci5,ci6, ci7,ci8,ci9,ci10], 'coverPic': ci1},
{'folderName': "Camera", data: [ci2, ci2,ci3,ci4,ci5,ci6, ci7,ci8,ci9,ci10], 'coverPic': ci2},
{'folderName': "Hammad", data: [ci3, ci2,ci3,ci4,ci5,ci6, ci7,ci8,ci9,ci10], 'coverPic': ci3},
{'folderName': "Faimly", data: [ci4, ci2,ci3,ci4,ci5,ci6, ci7,ci8,ci9,ci10], 'coverPic': ci4},
{'folderName': "Friends", data:[ci5, ci2,ci3,ci4,ci5,ci6, ci7,ci8,ci9,ci10] , 'coverPic': ci5},
{'folderName': "Instagram", data: [ci6, ci2,ci3,ci4,ci5,ci6, ci7,ci8,ci9,ci10], 'coverPic': ci6},
{'folderName': "Docs", data: [ci7, ci2,ci3,ci4,ci5,ci6, ci7,ci8,ci9,ci10], 'coverPic': ci7},
{'folderName': "WhatsApp Images", data: [ci8, ci2,ci3,ci4,ci5,ci6, ci7,ci8,ci9,ci10], 'coverPic': ci8},
{'folderName': "Docs", data: [ci9, ci2,ci3,ci4,ci5,ci6, ci7,ci8,ci9,ci10], 'coverPic': ci9},]
const a = 4
function Home({ navigation }) {

  return (
    <View style={{ flex: 1, alignItems:'center', justifyContent: 'center', marginTop: 20}}>
      
       <FlatList
       
         data={piclist}
         renderItem={({item} ) => ( 
         <TouchableOpacity  onPress={()=>navigation.navigate('DetailScreen', {'pics':item.data, 'header':item.folderName })}>
      
          <Image style={{ width: dialPadSize, borderRadius:10,
            height: dialPadSize, flex:1, justifyContent: 'center', alignItems:'center'}} source = {item.coverPic} /> 
           <View style={{flex:1, flexDirection: 'row', alignItems:'center', justifyContent: 'space-between', maxWidth: dialPadSize} }><Text>{item.folderName}  </Text>
           <Text>{item.data.length}</Text></View>
                     
           </TouchableOpacity>)}
         keyExtractor={(item) => item}
         columnWrapperStyle={{gap:10}}
         contentContainerStyle={{gap:10}}
         numColumns={2} 
                />
    </View>
  )
}

export default Home;

// import React from 'react';
// import { View, FlatList, Image, StyleSheet } from 'react-native';

// const ImageList = () => {
//   const renderItem = ({ item }) => (
//     <Image source={item.source} style={styles.image} />
//   );

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={images}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//         numColumns={2} // Adjust the number of columns as per your layout
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     padding: 10,
//   },
//   image: {
//     width: 150, // Adjust dimensions as per your design
//     height: 150,
//     margin: 5,
//   },
// });

// export default ImageList;

