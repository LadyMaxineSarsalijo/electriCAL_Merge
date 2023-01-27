import React, { useEffect } from 'react';
import {View, SafeAreaView, StyleSheet, Text, Platform, UIManager, TouchableOpacity,Image} from 'react-native';
import {AccordionList} from 'react-native-accordion-list-view';
import suga from './pics/suga.png';
import circle from './pics/circle.png'
import { useState } from 'react';
import { useNavigation } from "@react-navigation/native";


const FAQ = () => {
    const navigation = useNavigation ();
    const data = [
        {
            id: 0,
            title: 'What is "electriCAL"?',
            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
            id: 1,
            title: 'How do I set up my account?',
            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
          {
            id: 2,
            title: 'How do I recover my account?',
            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },

          {
            id: 3,
            title: 'How to use this app?',
            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
          {
            id: 4,
            title: 'What are my benefits if I use this app?',
            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
          id: 5,
          title: 'How can I contact you if I have questions?',
          body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
          
    ];
    useEffect(() => {
        if (Platform.OS === 'android') {
            if (UIManager.setLayoutAnimationEnabledExperimental) {
                UIManager.setLayoutAnimationEnabledExperimental(true);
            }
        }
    }, []);
    return (
        <SafeAreaView style={styles.container}>
          
          <TouchableOpacity style={styles.Bbutton} onPress={()=> {
          navigation.navigate('DrawBar')
        }}>
          <Text style={styles.btext}>BACK</Text>
          <View>
        </View>
        </TouchableOpacity>
        <View>
        <Text style={styles.textAbout}>Frequently Asked Questions</Text>
        </View>
            <View>
                <AccordionList
                    data={data}
                    customTitle={item => <Text>{item.title}</Text>}
                    customBody={item => <Text>{item.body}</Text>}
                    animationDuration={400}
                    expandMultiple={false}
                    style={styles.faq}
                />
            </View>
        </SafeAreaView>
    );
};

export default FAQ;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: '2%',
        paddingHorizontal: '3%',
        height: '100%',
        backgroundColor: '#EFECE1',
        justifyContent: 'center'
    },

    box: {
      height: 500,
      width: 320,
      marginLeft: 20,
      borderRadius: 15,
      right: 10
  },

  faq: {
    width: 320,
    left: 23,
    alignContent: 'center'
   },

   Bbutton: {
    backgroundColor:'#FEF0B3',
    alignItems: "center",
    width: 130,
    height: 45,
    borderRadius: 15,
    bottom: 30

  },

  btext:{
    fontStyle: "normal",
    fontSize: 20,
    textAlign:'center',
    fontWeight: "bold",
    top: 10,
    fontFamily: "sans-serif-condensed",
    
    
},

electext:{
  fontStyle: "normal",
  fontSize: 20,
  fontWeight: "bold",
  fontFamily: "sans-serif-condensed",
  left: 215,
  bottom: 15
  
},
    
sugaimg: {
    height: 60,
    width: 60,
    color: 'white',
    left: 300,
    top: 3,
    
    

},

textAbout: {
  fontStyle: "normal",
  fontSize: 25,
  height: 60,
  width: 330,
  fontWeight: "bold",
  fontFamily: "sans-serif-condensed",
  backgroundColor: "#FCD859",
  borderRadius: 15,
  textAlign: 'center',
  justifyContent: 'center',
  paddingTop: 10,
  bottom: 10,
  left: 17

},

});