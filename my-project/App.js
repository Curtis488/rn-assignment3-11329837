import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, Devs</Text>
      <Text style={styles.text1}>14 tasks today</Text>
      <Image style={styles.img1} source={require('./assets/photos/Profile Image.png')}/>
      <Image style={styles.img2} source={require('./assets/photos/Group 2.png')}/>
      <StatusBar style="auto" />
      <Icon name='search' size={30} color={'black'} style={styles.icon}/>
      <TextInput
        style={styles.input}
        placeholder="Search..."
      
      />
      
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
    right: 100,
    fontSize: 30,
    fontWeight: 'bold',
  },
  text1:{
    bottom: 300,
    right: 130,
  },
  img1:{
   position: 'absolute',
   top: 70,
   right: 20,
  },
  
  input: {
    width: 220,
    position: 'absolute',
    top: 150,
    left: 60,
    height: 60,
    backgroundColor: '#fff',
    placeholderTextColor: '#888'
  },
  icon:{
    position: 'absolute',
    bottom: 590,
    right: 340,
  },
  img2: {
    position: 'absolute',
    top: 150,
    left: 320,

  },
 
});
