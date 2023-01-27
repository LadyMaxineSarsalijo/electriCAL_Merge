import { Image, Text, View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { useState, useEffect} from "react";


function HistoryCard(props) {

    const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    setCurrentDate(
      date + '/' + month + '/' + year
    );
  }, []);

       return (
        
        <View style={styles.grid}> 
                  
            <Text style={styles.text}>POSSIBLE BILL:<Text style={styles.text2}> {props.pb}</Text>
            </Text>
            <Text style={styles.text}>Date: {currentDate}</Text>

        </View>
        
        
    )
}

export default HistoryCard
const styles = StyleSheet.create({
    grid:{
        backgroundColor: "#F8D866",
        borderRadius: 10,
        width:320,
        height:50,
        marginTop:'6%',
        display: 'flex',
        flexWrap: "wrap",
        justifyContent:'center'
        
    },
    text:{
        marginLeft: 20,
        fontWeight:'bold',
        fontSize:15
        
    },

    text2:{
        left:30,
        fontWeight:'bold',
        fontSize:20
        
    },


})