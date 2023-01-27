import { Modal, Animated,Pressable,Button, TextInput, View, Text, ImageBackground, Image, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import close from './close.png';
import success from './success.png';
import React from "react";

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
  

const Verification = ()=> {
    const navigation = useNavigation();
    const [visible, setVisible] = React.useState(false);
    
    return(
        <View style={styles.container}>
        <ModalPoup visible={visible}>
          <View style={{alignItems: 'center'}}>
            <View style={styles.header}>
              <TouchableOpacity onPress={() => setVisible(false)}>
                <Image
                  source={close}
                  style={{height: 30, width: 30}}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <Image
              source={success}
              style={{height: 150, width: 150, marginVertical: 10, marginBottom: 70}}
            />
          </View>
  
          <Text style={{marginVertical: 30, fontSize: 20, textAlign: 'center', marginTop: -80}}>
            Successful!
          </Text>
          <TouchableOpacity style={styles.mButton} onPress = {() =>{
            navigation.navigate('Login');
          }}>
            <Text style={styles.mTxt}>LOG IN</Text>
          </TouchableOpacity>
        </ModalPoup>
        <View style={styles.container2}>
        <Text style={styles.verText}>Verification</Text>
        <Text style={styles.subText}>Enter 6 digit code from your email address</Text>
        <TextInput style={styles.codeInput1} keyboardType="numeric" maxLength={1}/>
        <TextInput style={styles.codeInput2} keyboardType="numeric" maxLength={1}/>
        <TextInput style={styles.codeInput3} keyboardType="numeric" maxLength={1}/>
        <TextInput style={styles.codeInput4} keyboardType="numeric" maxLength={1}/>
        <TextInput style={styles.codeInput5} keyboardType="numeric" maxLength={1}/>
        <TextInput style={styles.codeInput6} keyboardType="numeric" maxLength={1}/>
        <TouchableOpacity>
        <Text style={styles.resend}>Resend Code?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.verifButton} onPress={() => setVisible(true)}>
            <Text style={styles.verifTxt}>VERIFY</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.BacButton} onPress={()=>{
            navigation.navigate ("Forgotpassword");
        }}>
            <Text style={styles.verifTxt}>BACK</Text>
        </TouchableOpacity>
        </View>

      </View>
        
     
    );

};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#EFECE1',
      alignItems: 'center',
      justifyContent: 'center',
    },

    container2: {
      backgroundColor: 'white',
      height: 450,
      width: 320,
      marginTop: 100,
      alignItems: 'center',
      borderRadius: 20
    },

    verText:{
        top: 15,
        fontStyle: "normal",
        fontSize: 35,
        textAlign:'center',
        height: 60,
        padding:5,
        fontWeight: "bold",
        fontFamily: "sans-serif-condensed",
        marginBottom: 20
    },

    subText: {
        fontStyle: "normal",
        fontSize: 18,
        textAlign:'center',
        fontFamily: "sans-serif-condensed",
        marginBottom: 20
    },

    codeInput1: {
        borderWidth: 2,
        height: 45,
        width: 45,
        left: -125,
        textAlign:'center',
        borderRadius: 10,
        backgroundColor: '#EBE8CD',
        marginBottom:0,
        justifyContent: 'center',
        fontFamily: "sans-serif-condensed"
    },

    codeInput2: {
        borderWidth: 2,
        height: 45,
        width: 45,
        padding:10,
        left: -75,
        bottom: 45,
        borderRadius: 10,
        backgroundColor: '#EBE8CD',
        marginBottom:0,
        justifyContent: 'center',
        fontFamily: "sans-serif-condensed"
    },

    codeInput3: {
        borderWidth: 2,
        height: 45,
        width: 45,
        padding:10,
        left:-25,
        marginTop: -90,
        textAlign:'center',
        borderRadius: 10,
        backgroundColor: '#EBE8CD',
        marginBottom:0,
        fontFamily: "sans-serif-condensed"
    },

    codeInput4: {
        borderWidth: 2,
        height: 45,
        width: 45,
        padding:10,
        left: 25,
        marginTop: -45,
        textAlign:'center',
        borderRadius: 10,
        backgroundColor: '#EBE8CD',
        marginBottom:0,
        justifyContent: 'center',
        fontFamily: "sans-serif-condensed"
    },

    codeInput5: {
        borderWidth: 2,
        height: 45,
        width: 45,
        padding:10,
        left: 75,
        marginTop: -45,
        textAlign:'center',
        borderRadius: 10,
        backgroundColor: '#EBE8CD',
        marginBottom:0,
        justifyContent: 'center',
        fontFamily: "sans-serif-condensed"
    },

    codeInput6: {
        borderWidth: 2,
        height: 45,
        width: 45,
        padding:10,
        left: 125,
        marginTop: -45,
        textAlign:'center',
        borderRadius: 10,
        backgroundColor: '#EBE8CD',
        marginBottom:0,
        justifyContent: 'center',
        fontFamily: "sans-serif-condensed"
    },

    resend: {
        left: 100,
        width:200,
        marginTop: 10,
        textAlign: "center",
        color: "#3F52FD",
        fontWeight: "bold",
        textDecorationLine: 'underline',
        fontFamily: "sans-serif-condensed",
        fontSize: 15,
    },
    verifButton: {
        width: 200,
        backgroundColor: '#DCB900',
        height: 50,
        width: 250,
        borderRadius: 20,
        textAlign:'center',
        marginTop: 20
    },

    verifTxt:{
        fontStyle: "normal",
        fontSize: 25,
        textAlign:'center',
        height: 60,
        padding:5,
        margin:5,
        fontWeight: "bold",
        fontFamily: "sans-serif-condensed"
    },
    BacButton: {
        width: 200,
        backgroundColor: '#DCB900',
        height: 50,
        width: 250,
        borderRadius: 20,
        textAlign:'center',
        marginTop: 15
    },

    modalBackGround: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalContainer: {
        width: '80%',
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderRadius: 20,
        elevation: 20,
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
        height: 50,
        width: 150,
        left: 60,
        borderRadius: 20,
        textAlign:'center'
    },


    
}
);

export default Verification;
