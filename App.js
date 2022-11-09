import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes, Icons, Fonts } from './assets/Themes';
import React from 'react';
import {Image} from 'react-native';
import { ImageBackground } from 'react-native';


export default function App() {
  let [fontsLoaded] = useFonts({
    Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
    SydneyBold: require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.light.statusBar);
  /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/

  /* insert your code here */

  return (
/*naviagtion tool bar in the menu*/
    <View style={styles.container1}>
      <View style={styles.titleRow}>
        <Image
          source={Icons.menu.light}
          style={styles.MenuItem}
        />
        <Text style={styles.titleText}>ensom</Text>
        <Image
          source={Icons.sun}
          style={styles.MenuItem}
        />
      </View>

  {/*profile */}
    <View style={styles.container2}>
      
      <ImageBackground
        source={Profiles.mtl.image}
        imageStyle={styles.profilePic}>
        
          <Text style={styles.name}> {Profiles.mtl.name} </Text>
          <Text style={styles.caption}> {Profiles.mtl.caption} </Text>
      </ImageBackground>

      <View style={[styles.audio, styles.shadowPropAudio]}>
      <Text style={styles.audioText}> My hottest take </Text>
       <Image
          style={styles.playItem}
          source={Icons.player.light}
        />
        <Image
          style={styles.voiceItem}
          source={Icons.audioWave.light}
        />
      </View>
    </View>

  {/* bottom action bar */}
    <View style={styles.container3}>
      <View style={styles.bottomIcons}>
      <Image
          source={Icons.discover.light}
          style={styles.MenuItem}
        />
       <Image
          source={Icons.heart.light}
          style={styles.MenuItem}
        />
        <Image
          source={Icons.messages.light}
          style={styles.MenuItem}
        />
      </View> 
        <View style={styles.bottomText}>
          <Text style={styles.bottomText}> Discover</Text>
          <Text style={styles.bottomText}> Matches</Text>
          <Text style={styles.bottomText}> DMs</Text>
       </View>
       </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#eeee',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between',
    padding: 20,
    marginBottom: 20,
    marginTop: 41,
  },
  MenuItem: {
    height: 40,
    width: 40,
  },
  titleText: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: '30',
    fontFamily: 'SydneyBold' ,
  },
  
  container2: {
    flex: 2,
    marginBottom: 40,
    alignItems: 'center',
  },

  profilePic: {
    height: 380,
    width: 330,
    borderRadius: 12,
    position:'relative',
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  name: {
   color: 'white',
   fontFamily: 'Sydney',
   fontSize: '30',
   position: 'absolute',
   marginLeft: 5,
  },
  caption: {
    color: 'white',
    fontFamily: 'Sydney',
    fontSize: '12',
    position: 'absolute',
    marginTop: 355,
    marginLeft: 10,
   },

  audio: {
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 15,
    marginVertical: 20,
    borderRadius: 20,
   },

  audioText: {
   color: 'black',
   fontFamily: 'Sydney',
   fontSize: '25',
   position: 'absolute',
   justifyContent: 'flex-end',
   padding: 11,
   },
  playItem:{
    height: 50,
    width: 50,
    marginTop: 35,
    marginRight: 20,
    marginBottom: 10,
    alignItems: 'center',
   },
  voiceItem:{
    height: 50,
    width: 250,
    marginTop: 35,
    marginBottom: 10,
    alignItems: 'center',
   },
  
  shadowPropAudio: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 5},
    shadowOpacity: 0.6,
    shadowRadius: 4,
  },

  containter3: {
    flex: 3,
    backgroundColor: 'black',
  },
  bottomIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'black',
    paddingTop: 20,
    paddingHorizontal: 50,
  },
  bottomText: {
    flexDirection: 'row',
    fontSize: '20',
    fontFamily: 'Sydney' ,
    color: 'white',
    justifyContent: 'space-between',
    backgroundColor: 'black',
    padding: 5,
    paddingBottom: 10,
    paddingHorizontal: 25,
  },
});
