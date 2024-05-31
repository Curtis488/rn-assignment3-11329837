import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, Devs</Text>
      <Text style={styles.text1}>14 tasks today</Text>
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
    right: 120,
    fontSize: 24,
    fontWeight: 'bold',
  },
  text1:{
    bottom: 300,
    right: 130,
  },
 
});
