import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, Devs</Text>
      <Image style={styles.img1} source={require('./assets/photos/Profile Image.png')} />
      <Image style={styles.img2} source={require('./assets/photos/Group 2.png')} />
      <Text style={styles.text1}>14 tasks today</Text>
      <Text style={styles.text2}>Categories</Text>

      <View style={styles.categoryContent}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.categoryContent1}>
          <Text style={styles.text3}>Exercise</Text>
          <Text style={styles.text4}>12 tasks</Text>
          <Image style={styles.img3} source={require('./assets/photos/young woman working online.png')} />
        </View>

        <View style={styles.categoryContent2}>
          <Text style={styles.text5}>Study</Text>
          <Text style={styles.text6}>12 tasks</Text>
          <Image style={styles.img4} source={require('./assets/photos/young woman working at desk.png')} />
        </View>

        <View style={styles.categoryContent3}>
          <Text style={styles.text7}>Cooking</Text>
          <Text style={styles.text8}>4 tasks</Text>
          <Image style={styles.img4} source={require('./assets/photos/cooking woman.jpg')} />
        </View>

        <View style={styles.categoryContent3}>
          <Text style={styles.text7}>Coding</Text>
          <Text style={styles.text8}>5 tasks</Text>
          <Image style={styles.img4} source={require('./assets/photos/man coding.jpg')} />
        </View>

        <View style={styles.categoryContent3}>
          <Text style={styles.text7}>Travel</Text>
          <Text style={styles.text8}>2 tasks</Text>
          <Image style={styles.img4} source={require('./assets/photos/travel.jpg')} />
        </View>

        <View style={styles.categoryContent3}>
          <Text style={styles.text7}>Church</Text>
          <Text style={styles.text8}>5 tasks</Text>
          <Image style={styles.img4} source={require('./assets/photos/Church.jpg')} />
        </View>

        <View style={styles.categoryContent3}>
          <Text style={styles.text7}>School</Text>
          <Text style={styles.text8}>5 tasks</Text>
          <Image style={styles.img4} source={require('./assets/photos/school.jpg')} />
        </View>

        <View style={styles.categoryContent3}>
          <Text style={styles.text7}>Work</Text>
          <Text style={styles.text8}>3 tasks</Text>
          <Image style={styles.img4} source={require('./assets/photos/working woman.jpg')} />
        </View>

        </ScrollView>
      </View>

      <View style={styles.searchbox}>
        <Icon name='search' size={30} color={'black'} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Search..."
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'beige',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    position: 'absolute',
    top: 50,
    left: 23
  },
  text1: {
    position: 'absolute',
    top: 90,
    left: 22
  },
  img1: {
    position: 'absolute',
    top: 55,
    right: 30,
    width: 50
  },

  searchbox: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
    width: 259,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    position: 'absolute',
    top: 120,
    right: 110,
  },

  input: {
    width: '80%',
    paddingLeft: 60,
  },
  icon: {
    position: 'absolute',
    left: 10,
  },
  img2: {
    alignSelf: 'center',
    position: 'absolute',
    top: 135,
    right: 30,
  },
  text2: {
    fontSize: 30,
    alignSelf: 'center',
    position: 'absolute',
    top: 200,
    right: 220,
  },


  categoryContent: {
    flexDirection: 'row',
    marginTop: 270,
    maxHeight: 200
  },

  categoryContent1: {
    backgroundColor: 'white',
    borderRadius: 20,
    width: 180,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginLeft: 15,
  },

  categoryContent2: {
    backgroundColor: 'white',
    borderRadius: 20,
    width: 180,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginLeft: 15,
  },
 
  categoryContent3:{
    backgroundColor: 'white',
    borderRadius: 20,
    width: 180,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginLeft: 15,
  },

  
});
