import * as React from 'react';
import {Image, Button,View,Text,SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import suga from './pics/suga.png';
import box from './pics/box.png'
import { ScrollView } from 'react-native-gesture-handler';
import iyb from './pics/iyb.png'
import step2 from './pics/step2.png'
const Instructions = ({ navigation }) => {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.Bbutton} onPress={()=> {
          navigation.navigate('DrawBar')
        }}>
          <Text style={styles.btext}>BACK</Text>
        </TouchableOpacity>
        <View>
        <Text style={styles.electext}>
          electriCAL
        </Text>
          <Image source={suga} style={styles.sugaimg}/>
        </View>
        <View>
        <Text style={styles.textAbout}>INSTRUCTIONS</Text>
        </View>
        <View style={styles.step1}>
          <Text style={styles.text1}>Step 1.</Text>
          <Text style={styles.text2}> Input desired budget above as your limit in a month and CLICK “Save”.</Text>
        </View>
        <Text style={styles.box}></Text>
        <Image source={iyb} style={styles.iybimg}/>
        <Text style={styles.box1}></Text>
        <Text style={styles.box2}></Text>
        <View style={styles.step2}>
          <Text style={styles.text3}>Step 2.</Text>
          <Text style={styles.text4}>Updated kilowatt per hour price is provided.</Text>
        </View>
        <Image source={step2} style={styles.step2img}/>
        <Text style={styles.box4}></Text>
        <View style={styles.step3}>
          <Text style={styles.text5}>Step 3.</Text>
          <Text style={styles.text6}> Input the number of kilowatts from your meter.</Text>
          <Text style={styles.box5}></Text>
          <Text style={styles.box6}></Text>
          <Image source={step2} style={styles.step3img}/>
          <Text style={styles.box7}></Text>
          <View style={styles.step31}>
          <Text style={styles.text11}>Step 3.1</Text>
          <Text style={styles.text7}>Or You can input the possible total number of kilowatts reflected in your dashboard based on your selected devices</Text>
          <Text style={styles.box8}></Text>
          <Image source={step2} style={styles.step31img}/>
          <Text style={styles.box9}></Text>
          <View style={styles.step4}>
          <Text style={styles.text11}>Step 4</Text>
          <Text style={styles.text7}>Or You can input the possible total number of kilowatts reflected in your dashboard based on your selected devices</Text>
          </View>     
          <Text style={styles.box0}></Text>

        </View>
        <Image source={step2} style={styles.step4img}/>
        <Text style={styles.box11}></Text>

        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

export default Instructions;

const styles = StyleSheet.create({
  box11:{
    alignItems: "center",
    borderColor: 'red',
    border: 10,
    width: 260,
    height: 40,
    top: 20,
    textAlign: 'center',
    borderWidth: 3,
    left:60,
  },
  step4img:{
    width: 210,
    height: 170,
    bottom: -50,
    left: 85,
  },
  box0:{
    alignItems: "center",
    borderColor: 'black',
    border: 10,
    width: 230,
    height: 180,
    top:-170,
    left:100,
    textAlign: 'center',
    borderWidth: 3
  },
  step4:{
    top:-180
  },
  box9:{
    alignItems: "center",
    borderColor: 'red',
    border: 10,
    width: 260,
    height: 40,
    top: -243,
    textAlign: 'center',
    borderWidth: 3,
    left:85,
  },
  step31img:{
    width: 210,
    height: 170,
    bottom: 175,
    left: 110,
  },
  box8:{
    alignItems: "center",
    borderColor: 'black',
    border: 10,
    width: 230,
    height: 180,
    top:0,
    left:100,
    textAlign: 'center',
    borderWidth: 3
  },
  text7:{
    width:320,
    fontSize:17,
    top: -23,
    left:100,
  },
  text11:{
    fontWeight:'bold',
    fontSize: 20,
    left:25,
  },
  step31:{
    left:-25,
    top: -190,
    height: 150
  },
  box7:{
    alignItems: "center",
    borderColor: 'red',
    border: 10,
    width: 260,
    height: 30,
    top: -325,
    textAlign: 'center',
    borderWidth: 3,
    left:60,

  },
  step3img:{
    width: 210,
    height: 170,
    bottom: 205,
    left: 85,
  },
  box6:{
    alignItems: "center",
    borderColor: 'black',
    border: 10,
    width: 230,
    height: 180,
    top: -30,
    left:75,
    textAlign: 'center',
    borderWidth: 3
  },
  box5:{
    alignItems: "center",
    borderColor: 'black',
    border: 10,
    width: 230,
    height: 180,
    top: -525,
    textAlign: 'center',
    borderWidth: 3
  },
  text6:{
    width:330,
    fontSize:17,
    top: -23,
    left: 60,
  },
  text5:{
    fontWeight:'bold',
    fontSize: 20
  },
  step3:{
    left:-25,
    top: -500,
    height: 150
  },
  box5:{
    alignItems: "center",
    borderColor: 'red',
    border: 10,
    width: 260,
    height: 30,
    top: -246,
    textAlign: 'center',
    borderWidth: 3,
    left:60,

  },
  box4:{
    alignItems: "center",
    borderColor: 'black',
    border: 10,
    width: 230,
    height: 180,
    top: -525,
    textAlign: 'center',
    borderWidth: 3
  },

  step2img:{
    width: 210,
    height: 170,
    bottom: 350,

  },
  text4:{
    width:320,
    fontSize:17,
    top: -23,
    left: 65,
  },
  text3:{
    fontWeight:'bold',
    fontSize: 20
  },
  step2:{
    left:-30,
    top: -250,
    height: 150
    },
  box2:{
    alignItems: "center",
    borderColor: 'red',
    border: 10,
    width: 100,
    left:-43,
    height: 35,
    top: -297,
    textAlign: 'center',
    borderWidth: 3
    },
  box1:{
    alignItems: "center",
    borderColor: 'red',
    border: 10,
    width: 260,
    height: 35,
    top: -290,
    textAlign: 'center',
    borderWidth: 3
    },
  iybimg:{
    width: 210,
    height: 170,
    bottom: 225,
  },
  box:{
    backgroundColor:'white',
    alignItems: "center",
    borderColor: 'black',
    border: 10,
    width: 230,
    height: 180,
    top: -50,
    textAlign: 'center',
    borderWidth: 3
    },
  text2:{
    width:320,
    fontSize:17,
    top: -23,
    left: 60,
  },
  text1:{
    fontWeight:'bold',
    fontSize: 20
  },
  step1:{
    left:-30,
    top: 30,
    height: 150
  },
  container: {
    alignItems: 'center',
    height: 1750
  },
  
  btext:{
      fontStyle: "normal",
      fontSize: 21,
      textAlign:'center',
      width: 50,
      fontWeight: "bold",
      fontFamily: "sans-serif-condensed",
  },

  electext:{
    fontStyle: "normal",
    fontSize: 20,
    textAlign:'center',
    height: 30,
    width: 85,
    fontWeight: "bold",
    fontFamily: "sans-serif-condensed",
    left: 90,
    top: 40
    
},
      
  sugaimg: {
      height: 60,
      width: 60,
      color: 'white',
      textDecorationLine: 'underline',
      left: 170,
      top:-20
  },
  Bbutton: {
      backgroundColor:'#FEF0B3',
      alignItems: "center",
      borderRadius: 15,
      width: 100,
      height: 35,
      top: 65,
      left: -140,
      textAlign: 'center'
      
  },

  textAbout: {
      fontStyle: "normal",
      fontSize: 25,
      height: 60,
      width: 330,
      padding:13,
      margin:5,
      fontWeight: "bold",
      fontFamily: "sans-serif-condensed",
      backgroundColor: "#FCD859",
      borderRadius: 15,
      textAlign: 'center'
  },
});