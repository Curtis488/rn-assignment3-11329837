import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, Devs</Text>
      <Text style={styles.text1}>14 tasks today</Text>
      <Text style={styles.text2}>Categories</Text>
      <Text style={styles.text3}>Exercise</Text>
      <Text style={styles.text4}>12 tasks</Text>
      <Image style={styles.img1} source={require('./assets/photos/Profile Image.png')}/>
      <Image style={styles.img2} source={require('./assets/photos/Group 2.png')}/>
      <Image style={styles.img3} source={require('./assets/photos/young woman working online.png')}/>
      <Image style={styles.img4} source={require('./assets/photos/young woman working at desk.png')}/>
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
  text2:{
  fontSize: 30,
  bottom: 150,
  right: 100,
  },
  img3:{
    position: 'absolute',
    top: 370,
    right: 220,
    backgroundColor: '#fff',
    borderRadius: 25,
  },
 text3:{
  position: 'absolute',
  top: 300,
  right: 290,
  fontWeight: 'bold',
  fontSize: 20,
 },
 text4:{
  position: 'absolute',
  top: 330,
  right: 310,
 },
 img4:{
  position: 'absolute',
  top: 370,
  left: 220,
  backgroundColor:'#fff',
  borderRadius: 25,
 },
});
