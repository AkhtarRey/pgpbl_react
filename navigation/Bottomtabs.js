import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import Portofolio from '../App';
import {WebView} from 'react-native-webview';
import Getjsonfile from '../Getjsonfile';
import API from '../Callapi';
import Countnumber from '../Countnumber';
import Getdata from '../Getdata';
import Createdata from '../Createdata';
import Editdata from '../Editdata';

const webmap = require('../peta/map.html');

const Tab = createBottomTabNavigator();

// function HomeScreen() {
//   return (
//     <ScrollView>
//       <Text style={styles.title}>MY MAP</Text>
//       <View style={styles.listitems}>
//         <Image source={require('../peta/peta1.png')} style={styles.Image} />
//         <Text style={styles.captionaja}>Peta Area Tambang</Text>
//       </View>
//       <View style={styles.listitems}>
//         <Image source={require('../peta/peta2.jpg')} style={styles.Image} />
//         <Text style={styles.captionaja}>Peta Langit</Text>
//       </View>
//       <View style={styles.listitems}>
//         <Image source={require('../peta/peta3.jpg')} style={styles.Image} />
//         <Text style={styles.captionaja}>Peta Hujan</Text>
//       </View>
//       <View style={styles.listitems}>
//         <Image source={require('../peta/peta4.jpg')} style={styles.Image} />
//         <Text style={styles.captionaja}>Peta Api</Text>
//       </View>
//       <View style={styles.listitems}>
//         <Image source={require('../peta/peta5.jpg')} style={styles.Image} />
//         <Text style={styles.captionaja}>Peta Bumi</Text>
//       </View>
//     </ScrollView>
//   );
// }

// function MapScreen() {
//   return <WebView source={webmap} />;
// }

// function PortofolioScreen() {
//   return <Portofolio />;
// }

// function MahasiswaScreen() {
//   return <Getjsonfile />;
// }

// function APIScreen() {
//   return <API />;
// }

// function CountnumberScreen() {
//   return <Countnumber />;
// }

function GetScreen() {
  return <Getdata />;
}
function UploadScreen() {
  return <Createdata />;
}
function EditScreen() {
  return <Editdata />;
}

function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {backgroundColor: '#222428'},
        }}>
        {/* <Tab.Screen
          name="Portofolio"
          component={PortofolioScreen}
          options={{
            tabBarLabel: 'Profil',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="user-circle" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Map"
          component={MapScreen}
          options={{
            tabBarLabel: 'Map',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="map" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Mahasiswa"
          component={MahasiswaScreen}
          options={{
            tabBarLabel: 'Mahasiswa',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="user-graduate" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="API"
          component={APIScreen}
          options={{
            tabBarLabel: 'API',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="user-astronaut" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Countnumber"
          component={CountnumberScreen}
          options={{
            tabBarLabel: 'setState',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="unlock-alt" color={color} size={size} />
            ),
          }}
        /> */}
        <Tab.Screen
          name="Upload"
          component={UploadScreen}
          options={{
            tabBarLabel: 'Input',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="unlock-alt" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Get"
          component={GetScreen}
          options={{
            tabBarLabel: 'Data',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="unlock-alt" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Edit"
          component={EditScreen}
          options={{
            tabBarLabel: 'Edit',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="unlock-alt" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs;

const styles = StyleSheet.create({
  Image: {
    width: 200,
    height: 250,
    resizeMode: 'stretch',
  },
  listitems: {
    padding: 10,
    alignItems: 'center',
  },
  captionaja: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
});
