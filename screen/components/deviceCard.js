import { Image, Text, View, StyleSheet, FlatList, TouchableOpacity } from "react-native";


function DeviceCard(props) {

    return (
        
        <View style={styles.grid}>
            <TouchableOpacity>
            <Image style={styles.img} source = {props.image}/>            
            
            <Text >No. of Hours: { props.noOfHours }</Text>
            <Text >No. of Devices: {props.noOfDevices}</Text>
            </TouchableOpacity>
            
        </View>
        
        
    )
}

export default DeviceCard
const styles = StyleSheet.create({
    grid:{
        backgroundColor: "#F8D866",
        borderRadius: 10,
        width:150,
        height:140,
        marginLeft: '8%',
        marginTop:'6%',
        display: 'flex',
        flexDirection: "row",
        flexWrap: "wrap",

        justifyContent:'center'
    },
    img:{
        height:100,
        width: 100,

    },

})