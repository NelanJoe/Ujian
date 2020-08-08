import * as React from 'react';
import 'react-native-gesture-handler';
import { AppRegitry, StyleSheet, View, Text, Button, TouchableOpacity, ImageBackground, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Beranda from './Beranda';
import background from '../assets/image/1.jpg';
import LogoItem from '../components/logoItem';

function HomeScreen({navigation}) {
  return (
    <ImageBackground source={background} 
    style={styles.container}>
      <LogoItem/>
      <View style={styles.ovelayContainer}>
        <View style={styles.top}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Beranda')}
      >
        <Text style={styles.text}>Beranda</Text>
      </TouchableOpacity>
        </View>
      </View>
      
    </ImageBackground>
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  overlayContainer: {
    flex: 1,
    backgroundColor: 'rgba(47,163,218, .4)'
  },
  sunda: {
    height: 100,
    width: 100,
    flex: 1,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  top:{
    height: '50%',
    alignItems: 'center',
    // marginBottom: '425%',
    justifyContent: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 28,
    borderColor: '#fff',
    borderRadius: 50,
    borderWidth: 2,
    padding: 20,
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor: 'rgba(225,225,225, .1)'
  }
});
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" 
        component={HomeScreen} 
        options={{headerShown: false}}/>

        <Stack.Screen name="Beranda" 
        component={Beranda} 
        options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;