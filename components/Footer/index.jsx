import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Footer ({text,logo}) {
    return(
        <View style={styles.footer}>
            
            <Text style={styles.textFooter}>{text}</Text>
            <Image source={logo} style={styles.image}/>
        </View>
    )
}
const styles = StyleSheet.create({
    footer:{
        backgroundColor: '#002e00',
        flexDirection: "row",
        justifyContent:'center'
      },
      image:{
        marginTop:9,
        height:25,
        width:25
      },
      textFooter:{
        color:'#fff',
        padding:9,
        fontSize:14,
        fontStyle: 'italic'
      },
})