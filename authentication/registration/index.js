import { useState } from "react";
import { Pressable,Button, TextInput, View, Text, ImageBackground, Image, TouchableOpacity, Alert} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { useTogglePasswordVisibility } from "../useTogglePasswordVisibility";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { con_PasswordVisibility } from "./con_PasswordVisibility";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from "axios";

export default function Registration(){
    const navigation = useNavigation();
    const [first_name, setfname] = useState ("");
    const [last_name, setLastName] = useState ("");
    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState ("");
    const [conpass, setConPass] = useState ("");

    const { passwordVisibility, rightIcon, handlePasswordVisibility } = useTogglePasswordVisibility();
    const { passwordVisibility2, rightIcon2, handlePasswordVisibility2 } = con_PasswordVisibility();


    const SignupSchema = Yup.object().shape({
        fname: Yup.string()
          .min(3, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Please enter your first name'),
          lname: Yup.string()
          .min(3, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Please enter your last name'),
        email: Yup.string()
        .email('Invalid email')
        .min(5, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Enter email'),
        password: Yup.string()
        .min(8, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Please enter your password')
        .matches(
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
            'Must contain minumum of 8 character, at least one uppercase letter'
        ),
        confirmpassword: Yup.string()
        .min(8, 'Too Short!')
        .oneOf([Yup.ref('password')], 'Please match your password')
        .required('Please enter again your password')

      });

      const handleSubmit = (values, {setSubmitting}) => {
        axios.post('http://192.168.1.10/db_electrical/registration1.php', values)
        .then(response => {
            console.log(response.data)
            if (response.data.message === "Registered successfuly!") {
                Alert.alert("Success","Successfully Registered!")
                navigation.navigate("Login")
              } else if (response.data.message === "User Already Registered") {
                Alert.alert("Error","User Already Registered")
              }
            setSubmitting(false)
            
        })
        .catch(error => {
            console.log(error)
            setSubmitting(false)
        })
    }

      
   
        
    /*const register = () => {
        navigation.navigate( "Profile", {
            first_name: first_name,
            last_name: last_name,
            email: email
        })
    };*/
    return(
        <ImageBackground source={require('./309801225_1271235570111784_2236775530307066990_n.png')} resizeMode = "cover" style = {styles.bgimage}>
             <Formik
             initialValues={{
                fname: '',
                lname: '',
                email: '',
                password: '',
                confirmpassword: '',
              }}
              validationSchema={SignupSchema}
              onSubmit={handleSubmit}
             >
              {({values, errors, touched, handleChange, handleSubmit, handleBlur, isSubmitting }) => (

              

        <View style={styles.container}>
            <Text style={styles.welcome}>Welcome, Onboard!</Text>
            <Text style={styles.lets}>Let's assist you in completing your tasks!</Text>
            <TextInput style={styles.txtinput} placeholder="First name" 
            value={values.fname} 
            onChangeText={handleChange('fname')}
            onBlur={handleBlur('fname')}
             />
            {touched.fname &&
            errors.fname &&(
            <Text style={{color: "red"}}>{errors.fname}</Text>
            )}
            <TextInput style={styles.txtinput} placeholder="Last name" 
            value={values.lname} 
            onChangeText={handleChange('lname')}
            onBlur={handleBlur('lname')}/>
               {touched.lname &&
               errors.lname &&(
            <Text style={{color: "red"}}>{errors.lname}</Text>
            )}
            <TextInput style={styles.txtinput} placeholder="Email Address" 
            value={values.email} 
            onChangeText={handleChange('email')} 
            onBlur={handleBlur('email')}/>
                {touched.email &&
                errors.email &&(
            <Text style={{color: "red"}}>{errors.email}</Text>
            )}
            <TextInput style={styles.txtinput} placeholder="Password" 
            value={values.password} 
            secureTextEntry={passwordVisibility} 
            onChangeText={handleChange('password')} 
            onBlur={handleBlur('password')}/>
                     {touched.password &&
                     errors.password &&(
            <Text style={{color: "red"}}>{errors.password}</Text>
            )}
            <Pressable style={styles.eye} onPress={handlePasswordVisibility}>
                <MaterialCommunityIcons name={rightIcon} size={22} color="#232323" />
            </Pressable>
            <TextInput style={styles.constyles} placeholder="Confirm Password" 
            value={values.confirmpassword} 
            secureTextEntry={passwordVisibility2} 
            onChangeText={handleChange('confirmpassword')} 
            onBlur={handleBlur('confirmpassword')}/>
            
                    {touched.confirmpassword &&
                     errors.confirmpassword &&(
            <Text style={{color: "red"}}>{errors.confirmpassword}</Text>
            )}
            <Pressable style={styles.eye} onPress={handlePasswordVisibility2}>
                <MaterialCommunityIcons name={rightIcon2} size={22} color="#232323" />
            </Pressable>
            <TouchableOpacity 
            disabled={isSubmitting}
            style={styles.regButton}
            onPress={handleSubmit}>
                <Text style={styles.text}>REGISTER</Text> 
            </TouchableOpacity>
            <Text style={styles.fg}>Already Have an Account? <Text onPress={() =>{
                    navigation.navigate('Login')
                }} style={styles.fg2}>Sign in</Text></Text>

        </View>
                         )}
        </Formik>
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
        marginBottom:0,
        justifyContent: 'center',
        fontFamily: "sans-serif-condensed"

    },
    
    fg: {
        width:250,
        back: '#463a0b',
        textAlign: "center",
        justifyContent: 'center',
        marginBottom: 5,
        fontFamily: "sans-serif-condensed",
        fontSize: 15,


    },

    fg2: {
        margin: 5,
        width:200,
        back: '#463a0b',
        textAlign: "center",
        color: "#3F52FD",
        fontWeight: "800",
        textDecorationLine: 'underline',
        fontFamily: "sans-serif-condensed"
    },

    regButton: {
        width: 200,
        backgroundColor: '#DCB900',
        height: 50,
        width: 250,
        borderRadius: 20,
        textAlign:'center',
        marginBottom: 5,
        marginTop: -15,
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
  
    bgimage: {
        flex: 1
    },

    welcome: { 
        fontFamily: "sans-serif-condensed",
        fontWeight: "bold",
        fontSize: 30,
        marginTop: 50

    },
    
    lets : {
        fontFamily: "sans-serif-condensed",

    },
    eye: {
       marginLeft: 250, 
        top: -35,
        marginBottom: 0
    },

    constyles: {
        borderWidth: 2,
        height: 50,
        width: 300,
        padding:10,
        margin:5,
        marginTop: 10,
        textAlign:'center',
        borderRadius: 20,
        backgroundColor: '#EBE8CD',
        marginBottom:0,
        justifyContent: 'center',
        fontFamily: "sans-serif-condensed",
        marginTop: -10
     },
 

  });