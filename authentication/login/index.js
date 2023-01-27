import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Pressable, Button,Text, TextInput, View, TouchableOpacity,Image, ImageBackground, Alert} from "react-native";
import { StyleSheet } from "react-native";
import { useTogglePasswordVisibility } from "../useTogglePasswordVisibility";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from "axios";

export default function Login (){
    const navigation = useNavigation ();

    const [email, setEmail] =useState('');
    const [password,setPassword]=useState('');
    const [warning,setWarning] =useState('');
    const { passwordVisibility, rightIcon, handlePasswordVisibility } = useTogglePasswordVisibility();
    const [checkValidEmail, setCheckValidEmail] = useState(false);


    /*const handleCheckEmail = text => {
        let re = /\S+@\S+\.\S+/;
        let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    
        setEmail(text);
        if (re.test(text) || regex.test(text)) {
          setCheckValidEmail(false);
        } else {
          setCheckValidEmail(true);
        }
      };*/
    
      /*const checkPasswordValidity = value => {
        const isNonWhiteSpace = /^\S*$/;
        if (!isNonWhiteSpace.test(value)) {
          return 'Password must not contain Whitespaces.';
        }
    
        const isContainsUppercase = /^(?=.*[A-Z]).*$/;
        if (!isContainsUppercase.test(value)) {
          return 'Password must have at least one Uppercase Character.';
        }
    
        const isContainsLowercase = /^(?=.*[a-z]).*$/;
        if (!isContainsLowercase.test(value)) {
          return 'Password must have at least one Lowercase Character.';
        }
    
        const isContainsNumber = /^(?=.*[0-9]).*$/;
        if (!isContainsNumber.test(value)) {
          return 'Password must contain at least one Digit.';
        }
    
        const isValidLength = /^.{8,16}$/;
        if (!isValidLength.test(value)) {
          return 'Password must be 8-16 Characters Long.';
        }
    
        // const isContainsSymbol =
        //   /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
        // if (!isContainsSymbol.test(value)) {
        //   return 'Password must contain at least one Special Symbol.';
        // }
    
        return null;
      };
    */
      /*const handleLogin = () => {
        const checkPassowrd = checkPasswordValidity(password);
        if (!checkPassowrd) {
          user_login({
            email: email.toLocaleLowerCase(),
            password: password,
          })
            .then(result => {
              if (result.status == 200) {
                AsyncStorage.setItem('AccessToken', result.data.token);
                navigation.replace('Home');
              }
            })
            .catch(err => {
              console.error(err);
            });
        } else {
          alert(checkPassowrd);
        }
      };*/

      const handleSubmit = async (values, { setSubmitting, setErrors }) => {
        try {
          const response = await axios.post('http://192.168.1.10/db_electrical/Login.php', values);
          const data = response.data;
          console.log(data);
          if (data[0].Message === 'Logged In Successfully') {

            Alert.alert("Successful", "Successfully logged in")
            navigation.navigate("DrawBar")
          } else if(data[0].Message === "Your account has been deleted. Please contact the admin.") {
            Alert.alert("Error", "Your account has been deleted. Please contact the admin.");
          } else {
            setErrors({ general: data[0].Message });
            Alert.alert("Error", "Incorrect email or password")
          }
        } catch (err) {
          console.log(err);
          // Handle error
        } finally {
          setSubmitting(false);
        }
      }

      const SignupSchema = Yup.object().shape({
        email: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
        password: Yup.string()
        .required('Password is required')
        

      });
    return (
        <ImageBackground source={require('./309801225_1271235570111784_2236775530307066990_n.png')} resizeMode = "cover" style = {styles.bgimage}>
       <Formik
             initialValues={{
                email: '',
                password: '',
              }}
              validationSchema={SignupSchema}
              onSubmit={handleSubmit}
             >
              {({values, errors, touched, handleChange, handleSubmit, handleBlur, isSubmitting }) => (

        <View  style ={styles.container}>
            <Image source={require('./electriCAL__2_-removebg-preview.png')}style = {styles.image}/>
            <Text>{warning}</Text>
            <TextInput 
            style={styles.txtinput} 
            placeholder="Email Address" 
            value={values.email} 
            onChangeText={handleChange('email')} 
            onBlur={handleBlur('email')}
            name="email"/>
             {touched.email &&
                errors.email &&(
            <Text style={{color: "red"}}>{errors.email}</Text>
             )}

            <TextInput style={styles.txtinput} 
            placeholder="Password"  
            secureTextEntry={passwordVisibility}
            value={values.password} 
            onChangeText={handleChange('password')} 
            onBlur={handleBlur('password')}
            />
             {touched.password &&
                     errors.password &&(
            <Text style={{color: "red"}}>{errors.password}</Text>
            )}
            <Pressable style={styles.eye} onPress={handlePasswordVisibility}>
                <MaterialCommunityIcons name={rightIcon} size={22} color="#232323" />
            </Pressable>
            <TouchableOpacity 
            disabled={isSubmitting}
            style={styles.loginButton}
            onPress= {handleSubmit} >
                <Text style={styles.text} >LOG IN</Text>    
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() =>{
                    navigation.navigate('Forgotpassword');
                }}>
                <Text style={styles.fg}>Forgot Password?</Text>
              </TouchableOpacity>
            <Text style={styles.fg}>Don't have an account?
                 <Text onPress={() =>{
                    navigation.navigate('Registration');
                }} style={styles.fg2}> Sign Up </Text> </Text>
                
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
        marginBottom: 10,
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

    loginButton: {
        width: 200,
        backgroundColor: '#DCB900',
        height: 50,
        width: 250,
        borderRadius: 20,
        textAlign:'center',
        marginBottom: 5,
        marginTop: -25
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
    image:{
        justifyContent: "center",
        width: 300,
        height: 280,
        marginBottom: -20
    
    },
    bgimage: {
        flex: 1
    },

    eye: {
        marginLeft: 250, 
         top: -45,
     },

     textFailed: {
        alignSelf: 'center',
        color: 'red',
      },
  });