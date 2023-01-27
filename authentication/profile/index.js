import React from "react";
import { useRoute } from "@react-navigation/native";
import { Text, TextInput, View, TouchableOpacity,Image, ImageBackground} from "react-native";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";




export default function Profile (){

    const route =useRoute();
    const navigation = useNavigation ();

    return (
        <ImageBackground source={require('./Max.png')} resizeMode = "cover" style = {styles.bgimage}>
        <View style={styles.container}>
            <Text style={styles.name}>First Name: </Text>
            <Text style={styles.name}>Last Name: </Text>
            <Text style={styles.name}>Email Address: </Text>
            <TouchableOpacity style={styles.loginButton} onPress={() =>{
                    navigation.navigate('Login')
                }}>
                <Text style={styles.text}>LOG OUT</Text>    
            </TouchableOpacity>
        </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginTop: 150
    
    },
  
    bgimage: {
        flex: 1
    },

    name: {
        fontFamily: "sans-serif-condensed",
        marginLeft: 40,
        marginBottom:20,
        marginTop: 30,
        fontSize: 20
    },
    
    loginButton: {
        width: 200,
        backgroundColor: '#DCB900',
        height: 50,
        width: 250,
        borderRadius: 20,
        marginBottom: 5,
        marginTop: 25,
        marginLeft: 50
    },

    text:{
        fontStyle: "normal",
        fontSize: 25,
        textAlign:'center',
        height: 60,
        padding:5,
        margin:5,
        fontWeight: "bold",
        fontFamily: "sans-serif-condensed"

    },



 

  });