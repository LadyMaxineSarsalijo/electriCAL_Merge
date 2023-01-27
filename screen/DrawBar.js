import { StatusBar } from 'expo-status-bar';
import { useNavigation } from "@react-navigation/native";
import React, { useRef, useState,useEffect } from 'react';
import {Alert, TextInput, Animated, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Touchable } from 'react-native';
import About1 from './About';
import Devices from './Devices';
import female from './pics/female.png';
import menu from './pics/menu.png';
import suga from './pics/suga.png';
import close from './pics/close.png'
import { FontAwesome5 } from '@expo/vector-icons';
import { Component } from 'react/cjs/react.production.min';
import FAQ from './FAQ';
import Login from '../authentication/login';
import Instructions from './Instructions';
import History from './History';
import YourDevices from './YourDevices';
import { Modal,Pressable, ImageBackground,TouchableWithoutFeedback,Keyboard} from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { bool } from 'yup';
import { mutateMyHistory } from './components/HistorySlice';
import axios from 'axios';


const ModalPoup = ({visible, children}) => {
    const [showModal, setShowModal] = React.useState(visible);
    const scaleValue = React.useRef(new Animated.Value(0)).current;
    React.useEffect(() => {
      toggleModal();
    }, [visible]);
    const toggleModal = () => {
      if (visible) {
        setShowModal(true);
        Animated.spring(scaleValue, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }).start();
      } else {
        setTimeout(() => setShowModal(false), 200);
        Animated.timing(scaleValue, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start();
      }
    };
    return (
      <Modal transparent visible={showModal}>
        <View style={styles.modalBackGround}>
          <Animated.View
            style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
            {children}
          </Animated.View>
        </View>
      </Modal>
      
    );
  };



export default function DrawBar() {
  const history = useSelector((state) => state.devices.myHistory)
    const dispatch = useDispatch()
    const [visible, setVisible] = React.useState(false);
    const [currentTab, setCurrentTab] = useState("Dashboard");
    const [showMenu, setShowMenu] = useState(false);
    const kwh = 16.673;
    const [result, setResult] = useState('')
    const offsetValue = useRef(new Animated.Value(0)).current;
    const scaleValue = useRef(new Animated.Value(1)).current;
    const closeButtonOffset = useRef(new Animated.Value(0)).current;
    const navigation = useNavigation();
    const [Input, setInput] = useState('');
  /*  const showMessage = (val) => 
      setBudget(val.nativeEvent.text);
    }*/         
    const [text,setText] = useState('');
    const [budgetLimit, setBudgetLimit] = useState('')
    const total = budgetLimit * kwh;
    

    const reach = "You have reach the limit";
    const notreach = "Still on the budget";

    const status = () => {
      setVisible(false)
    if (total > text) {
      Alert.alert(reach);
    } else {
      Alert.alert(notreach) ;
    };
  }

  const handleSubmit = () => {
    if(!budgetLimit) {
        alert('Please Enter Budget Limit');
        return;
    }
    if (budgetLimit < 0) {
        alert('Budget Limit Should be Positive');
        return;
    }
    // use axios to make POST request to server
    axios.put('http://192.168.1.10/db_electrical/budget.php', {
        budgetLimit: budgetLimit,
    })
    .then(response => {
        console.log(response.data);
        alert(response.data);
        setBudgetLimit('');
    })
    .catch(error => {
        console.log(error);
        alert(error);
    });
}

    return (
      
        <SafeAreaView style = {styles.container}>
            <View style={{ justifyContent: 'flex-start', padding: 15 }}>
                <Image source={female} style={{
          width: 100,
          height: 100,
          borderRadius: 10,
          marginTop: 50,
          marginLeft: 25
        }}></Image>
        <ModalPoup visible={visible}>
          <View style={{alignItems: 'center'}}>
            <View style={styles.header}>
              <TouchableOpacity onPress={status}>
                <Image
                  source={close}
                  style={{height: 30, width: 30, top:-190, left:160}}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.syd}>
          <Text style={styles.textsyd}>RESULT</Text>
        </View>
  
          <Text style={{right:110, top:30, fontWeight:"bold", fontSize:20}}>
            Budget: 
          </Text>
         
          <Text style={{right:110, top:90, fontWeight:"bold", fontSize:20}}  >
            Total: 
          </Text>
          <Text style={{
                alignItems: "center",
                borderColor: 'black',
                border: 10,
                width: 220,
                height: 40,
                bottom:25,
                textAlign: 'center',
                borderWidth: 3,
                left:40,
                borderRadius:20,
                fontSize:30,
                color: "red"  
          }}>₱{text}</Text>
            
              <Text style={{
                alignItems: "center",
                borderColor: 'black',
                border: 10,
                width: 220,
                height: 40,
                bottom:-20,
                textAlign: 'center',
                borderWidth: 3,
                left:40,
                borderRadius:20,
                fontSize:22,
                color: "red"
          }}
          >₱{total}</Text>
           


         
        </ModalPoup>
        <Text style = {styles.text}></Text>
        <TouchableOpacity>
            <Text style = {styles.vprof} onPress={()=> {
                navigation.navigate ("Profile");
            }}>View Profile</Text>
            </TouchableOpacity>

           <View style={{ flexGrow: 1, marginTop: -380 }}>
            {
                //Tab
            }
            {TabButton(currentTab,setCurrentTab, "Devices", Devices)}
            {TabButton(currentTab,setCurrentTab, "About", About1)}
            {TabButton(currentTab,setCurrentTab, "FAQ's", FAQ)}
            {TabButton(currentTab,setCurrentTab, "History", History)}
            {TabButton(currentTab,setCurrentTab, "Your Devices", YourDevices)}
            {TabButton(currentTab,setCurrentTab, "Instructions", Instructions)}

           </View>

           <View style = {{marginBottom: 30}}>
           {TabButton(currentTab,setCurrentTab, "Log Out", Login)}
           </View>

           {
            //overlay
           }

           <Animated.View style = {{
            flex: 1,
            backgroundColor: "#EFECE1",
            position: 'absolute',
            top: 0,
            bottom: 0,
            left:0,
            right: 0, 
            width: 480,
            postion: 'absolute',
            paddingVertical: 10,
            paddingHorizontal: 10,
            borderRadius: showMenu ? 15 : 0,
            transform: [
                {scale: scaleValue},
                {translateX: offsetValue}
            ]      
           }}>
            <TouchableOpacity onPress={() => {
            // Do Actions Here....
            // Scaling the view...
            Animated.timing(scaleValue, {
              toValue: showMenu ? 1 : 0.88,
              duration: 300,
              useNativeDriver: true
            })
              .start()


            Animated.timing(offsetValue, {
              // YOur Random Value...
              toValue: showMenu ? 0 : 230,
              duration: 300,
              useNativeDriver: true
            })
              .start()

            Animated.timing(closeButtonOffset, {
              // YOur Random Value...
              toValue: !showMenu ? -30 : 0,
              duration: 300,
              useNativeDriver: true
            })
              .start()

            setShowMenu(!showMenu);
          }} >
                <Image source={showMenu ? close :menu} style={{
                    width: 30,
                    height: 45,
                    tintColor: 'black',
                    marginTop: 40
                }}></Image>
            </TouchableOpacity>
            <Image source={suga} style={{
                    justifyContent: "center",
                    width: 150,
                    height: 150,
                    left: 110,
                    bottom:30
                }}></Image>
                 <Text style = {{
                     fontStyle: "normal",
                     fontSize: 25,
                     textAlign:'center',
                     height: 60,
                     padding:5,
                     margin:5,
                     fontWeight: "bold",
                     fontFamily: "sans-serif-condensed",
                     marginBottom: 410,
                     right: 40,
                     top:-30,
                     id:'iyb'
                 }}>
                 Input Your Budget: ₱{budgetLimit}
            </Text>
            <TextInput 
                    style ={{borderWidth: 2,
                    height: 50,
                    width: 330,
                    padding:10,
                    margin:5,
                    marginTop:-455,
                    textAlign:'center',
                    borderRadius: 20,
                    backgroundColor: '#EBE8CD',
                    marginBottom: 10,
                    justifyContent: 'center',
                    left:17,
                    fontFamily: "sans-serif-condensed"}} 
                    placeholder="PHP" 
                    keyboardType="numeric"
                    value={budgetLimit}
                    onChangeText={text => setBudgetLimit(text)}
    
                    />
            <TouchableOpacity
                onPress={handleSubmit}
                style={{
                width: 200,
                backgroundColor: '#DCB900',
                height: 50,
                width: 130,
                borderRadius: 20,
                textAlign:'center',
                left:120,
                top:10,
            }}
            >
                <Text style = {{ fontStyle: "normal",
                    fontSize: 25,
                    textAlign:'center',
                    height: 60,
                    padding:5,
                    margin:5,
                    fontWeight: "bold",
                    fontFamily: "sans-serif-condensed",
                    marginBottom: 400}}>SAVE</Text>
            </TouchableOpacity> 
            <Text style = {{
                fontStyle: "normal",
                fontSize: 30,
                textAlign:'center',
                fontWeight: "bold",
                fontFamily: "sans-serif-condensed",
                marginTop: 20,
                marginLeft: -120,
                color: "red",
                left: 17
            }}>Electricity Usage Calculator</Text>   
            <Text style = {{
                fontStyle: "normal",
                fontSize: 20,
                textAlign:'center',
                fontWeight: "bold",
                fontFamily: "sans-serif-condensed",
                marginTop: 20,
                marginLeft: -90
            }} >Price of KW/H: ₱{kwh}</Text>
            <Text style = {{
                fontStyle: "normal",
                fontSize: 20,
                fontWeight: "bold",
                fontFamily: "sans-serif-condensed",
                marginTop: 20,
                marginLeft: 50
            }}>Usage: </Text>
            <TextInput
                //onChangeText={(budget) => setBudget(budget)}
                //value={budget}
                style = {{
                borderWidth: 2,
                height: 40,
                width: 220,
                padding:10,
                textAlign:'center',
                borderRadius: 20,
                backgroundColor: '#EBE8CD',
                justifyContent: 'center',
                fontFamily: "sans-serif-condensed",
                marginTop: -33,
                marginLeft: 110
            }} placeholder="Input Electricity Usage " keyboardType="numeric"/>
            <TouchableOpacity 

            onPress={()=> {
              setVisible(true)
              dispatch(mutateMyHistory({
                pb: total, 

        })) 
        }} 
        style={{
                width: 200,
                backgroundColor: '#DCB900',
                height: 50,
                width: 250,
                borderRadius: 20,
                textAlign:'center',
                marginBottom: 5,
                marginTop: 25,
                left: 60
            }}
            
            >
              
                <Text style = {{
                    fontStyle: "normal",
                    fontSize: 25,
                    textAlign:'center',
                    height: 60,
                    padding:5,
                    margin:5,
                    fontWeight: "bold",
                    fontFamily: "sans-serif-condensed",
                    marginBottom: 400
                }}
                >CALCULATE</Text>
            </TouchableOpacity>
            <Text style={{left:115, top:10, fontWeight:"bold", fontSize:20}}>
            Total KWH per day 
          </Text>  
          <Text style={{
                alignItems: "center",
                borderColor: 'black',
                border: 10,
                width: 220,
                height: 50,
                bottom:-20,
                textAlign: 'center',
                borderWidth: 3,
                left:75,
                fontSize:30,
                color: "red",
                padding:5
          }}
          >10 KWH</Text>
          
            <Text></Text>

           </Animated.View>

            </View>
            
        </SafeAreaView>
        
)
}

const TabButton = (currentTab, setCurrentTab,title) =>{
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() =>{
            navigation.navigate(title)
        }}>
               <View style ={styles.Button}>
                <Text style = {styles.textMan}>{title }</Text>
               </View>
            </TouchableOpacity>

    );

}




const styles = StyleSheet.create({
    dateText: {
      fontSize: 23,
      color: 'black',
      paddingBottom: 15
    },
  
    textsyd: {
        fontStyle: "normal",
        fontSize: 25,
        textAlign:'center',
        height: 60,
        padding:5,
        fontWeight: "bold",
        fontFamily: "sans-serif-condensed",  
      },
      syd:{
        backgroundColor: '#DCB900',
        height: 40,
        width: 250,
        borderRadius: 20,
        textAlign:'center',
        top: 0
      },
    usageInput1:{
        borderWidth: 2,
        height: 50,
        width: 300,
        textAlign:'center',
        borderRadius: 20,
        backgroundColor: '#EBE8CD',
        justifyContent: 'center',
        fontFamily: "sans-serif-condensed",
        left: 28,
        top: 10
    },
      usageInput:{
        borderWidth: 2,
        height: 50,
        width: 300,
        textAlign:'center',
        borderRadius: 20,
        backgroundColor: '#EBE8CD',
        justifyContent: 'center',
        fontFamily: "sans-serif-condensed",
        left: 28
    },
      modalBackGround: {
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.5)',
          justifyContent: 'center',
          alignItems: 'center',
        },
        modalContainer: {
            height:350,
          width: '90%',
          backgroundColor: '#F2E7BE',
          borderRadius: 20,
          elevation: 20,
          alignContent:'center',
          alignItems:'center'
        },
        header: {
          width: '100%',
          height: 40,
          alignItems: 'flex-end',
          justifyContent: 'center',
        },
        mTxt:{
          fontStyle: "normal",
          fontSize: 25,
          textAlign:'center',
          height: 60,
          padding:5,
          margin:5,
          fontWeight: "bold",
          fontFamily: "sans-serif-condensed"
      },
      mButton: {
          backgroundColor: '#DCB900',
          height: 45,
          width: 120,
          top:0,
          borderRadius: 20,
          textAlign:'center'
      },
    container: {
      flex: 1,
      backgroundColor: '#FCD859',
      alignItems: 'flex-start',
      justifyContent: 'flex-start'
    },
    
    text:{
        fontStyle: "normal",
        fontSize: 18,
        textAlign:'center',
        height: 60,
        padding:0,
        margin:0,
        fontWeight: "bold",
        fontFamily: "sans-serif-condensed",
        marginBottom: 400
        
    },

    textMan:{
        fontStyle: "normal",
        fontSize: 20,
        fontWeight: "bold",
        fontFamily: "sans-serif-condensed",
        paddingLeft: 15
        
        
    },

    vprof: {
        marginTop: -435,
        color: 'white',
        marginLeft: 35,
        textDecorationLine: 'underline',

    },
    Button: {
        backgroundColor:'#FEF0B3',
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 8,
        paddingLeft: 20,
        paddingRight: 40,
        borderRadius: 20,
        marginTop: 15,
    },

    textbud: {
            fontStyle: "normal",
            fontSize: 25,
            textAlign:'center',
            height: 60,
            padding:5,
            margin:5,
            fontWeight: "bold",
            fontFamily: "sans-serif-condensed",
            marginBottom: 400
    },

    txtinput:{
        borderWidth: 2,
        height: 50,
        width: 330,
        padding:10,
        margin:5,
        marginTop:-400,
        textAlign:'center',
        borderRadius: 20,
        backgroundColor: '#EBE8CD',
        marginBottom: 10,
        justifyContent: 'center',
        fontFamily: "sans-serif-condensed"
    },
    saveButton: {
        width: 200,
        backgroundColor: '#DCB900',
        height: 50,
        width: 130,
        borderRadius: 20,
        textAlign:'center',
        marginBottom: 5,
        marginTop: 5,
        marginLeft: -140

    },
    upButton: {
        width: 200,
        backgroundColor: '#DCB900',
        height: 50,
        width: 130,
        borderRadius: 20,
        textAlign:'center',
        marginBottom: 5,
        marginTop: -55,
        marginRight: -140
    },
    steps:{
        fontStyle: "normal",
        fontSize: 18,
        textAlign:'center',
        
        fontWeight: "bold",
        fontFamily: "sans-serif-condensed",
        marginRight: 280
    },
    ins1:{
        fontStyle: "normal",
        fontSize: 12,
        textAlign:'center',
        fontWeight: "bold",
        fontFamily: "sans-serif-condensed",
        marginTop: 5,
        marginLeft: -60

    },
    ins2:{
        fontStyle: "normal",
        fontSize: 12,
        textAlign:'center',
        fontWeight: "bold",
        fontFamily: "sans-serif-condensed",
        marginTop: -5,
        marginLeft: 10
    },
    calctext:{
        fontStyle: "normal",
        fontSize: 25,
        textAlign:'center',
        fontWeight: "bold",
        fontFamily: "sans-serif-condensed",
        marginTop: 5,
        marginLeft: 10,
        color: "red"

        

    },
    price:{
        fontStyle: "normal",
        fontSize: 18,
        textAlign:'center',
        fontWeight: "bold",
        fontFamily: "sans-serif-condensed",
        marginTop: 5,
        marginLeft: -50

    },
    usage:{
        fontStyle: "normal",
        fontSize: 18,
        fontWeight: "bold",
        fontFamily: "sans-serif-condensed",
        marginTop: 15,
        marginLeft: -170

    },
    usageInput:{
        borderWidth: 2,
        height: 35,
        width: 180,
        padding:10,
        textAlign:'center',
        borderRadius: 20,
        backgroundColor: '#EBE8CD',
        justifyContent: 'center',
        fontFamily: "sans-serif-condensed",
        marginTop: -30,
        marginLeft: 60
    },

    calcButton: {
        width: 200,
        backgroundColor: '#DCB900',
        height: 50,
        width: 250,
        borderRadius: 20,
        textAlign:'center',
        marginBottom: 5,
        marginTop: 25
    },


  });