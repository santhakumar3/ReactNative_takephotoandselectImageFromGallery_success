import {StyleSheet, Image, View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const App = () => {
  const [imgUrl, setImgUrl] = useState("https://theroadsandbeyond.com/wp-content/uploads/2018/05/alleppey-houseboats-e1526482095153.jpeg");
  const openCameraLib = async () => {
    console.log('PRESS========>>>>>1');
    const result = await launchCamera({
      saveToPhotos: true,
      mediaType: 'photo',
    });
    setImgUrl(result?.assets[0]?.uri);
    console.log('RESULT===>>', result);
  };

  const openLib = async () => {
    console.log('PRESS========>>>>>2');
    const result = await launchImageLibrary();
    setImgUrl(result?.assets[0]?.uri);
    console.log('RESULT===>>', result);
  };

  return (
    <View style={styles.container}>
      <View>
        <Image
          resizeMode="contain"
          style={styles.img}
          source={{
            uri: imgUrl,
          }}
        />
        <TouchableOpacity style={styles.btnCam} onPress={openCameraLib}>
          <Text style={styles.textBtn}>Open Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnCam} onPress={openLib}>
          <Text style={styles.textBtn}>Open Gallery</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    width: '90%',
    height: 300,
    alignSelf: 'center',
    borderRadius: 10,
  },
  btnCam: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 40,
    borderRadius: 6,
    backgroundColor: 'green',
  },
  textBtn: {
    color: '#fff',
  },
});
