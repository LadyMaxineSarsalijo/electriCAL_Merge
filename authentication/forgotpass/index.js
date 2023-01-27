import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Text, TextInput, View, TouchableOpacity,Image, ImageBackground} from "react-native";
import { StyleSheet } from "react-native";


export default function Forgotpassword (){
    const navigation = useNavigation ();
    const [email, setEmail] =useState('');

    return (
        <ImageBackground source={require('./forgotpass.png')} resizeMode = "cover" style = {styles.bgimage}>
        <View  style ={styles.container}>
            <Text style={styles.welcome}>Forgot Password?</Text>
            <Text style={styles.forgot}>Enter your Email address and we will send you instructions to reset your password.</Text>
            <TextInput style={styles.txtinput} placeholder="Email Address" require={true} value={email} onChangeText={setEmail}/>
            <TouchableOpacity style={styles.loginButton} onPress = {()=>{
                navigation.navigate("Verification")
            }}>
                <Text style={styles.text}>SEND EMAIL</Text>    
            </TouchableOpacity>
            <TouchableOpacity style={styles.BackButton} onPress={() =>{
                    navigation.navigate('Login')
                }}>
                <Text style={styles.text2}>BACK</Text> 
            </TouchableOpacity>
        </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    
    },
    
    txtinput:{
        borderWidth: 2,
        height: 50,
        width: 300,
        padding:10,
        margin:5,
        marginTop: 10,
        textAlign:'center',
        borderRadius: 20,
        backgroundColor: '#EBE8CD',
        justifyContent: 'center',
        fontFamily: "sans-serif-condensed"

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

    text2:{
        fontStyle: "normal",
        fontSize: 25,
        textAlign:'center',
        height: 60,
        padding:5,
        margin:5,
        fontWeight: "bold",
        fontFamily: "sans-serif-condensed"

    },
  
    bgimage: {
        flex: 1
    },

    
     loginButton: {
        width: 200,
        backgroundColor: '#DCB900',
        height: 50,
        width: 250,
        borderRadius: 20,
        textAlign:'center',
        marginTop: 20
    },

    BackButton: {
        width: 200,
        backgroundColor: '#DCB900',
        height: 50,
        width: 250,
        borderRadius: 20,
        textAlign:'center',
        marginTop: 20
    },

    forgot: {
        fontStyle: "normal",
        fontSize: 17,
        textAlign:'center',
        height: 60,
        paddingLeft:5,
        width: 320,
        marginTop:-5,
        fontWeight: "thin",
        fontFamily: "sans-serif-condensed",
    },
    welcome: { 
        fontFamily: "sans-serif-condensed",
        fontWeight: "bold",
        fontSize: 40,
        top: -5,
        marginLeft: 15,
        
    },
 

  });