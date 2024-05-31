import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, Devs</Text>
      <Text style={styles.text1}>14 tasks today</Text>
      <Image style={styles.img1} source={require('./assets/photos/Profile Image.png')}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'beige',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative', //Required for absolute positioning to work
  },
  text:{
    bottom: 300,
    right: 110,
    fontSize: 30,
    fontWeight: 'bold',
  },
  text1:{
    bottom: 300,
    right: 140,
  },
  img1:{
   position: 'absolute',
   top: 70,
   right: 20,
  },
 
});
