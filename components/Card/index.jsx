import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Card = ({ logo, nome_produto, preco, telProdutor}) => {
  return (
    <NavigationContainer>
    <View style={styles.view}>
      <Image source={logo} style={styles.Image} />
      <View style={styles.viewText}>
        <Text style={styles.Text}>{nome_produto}</Text>
        <Text style={styles.Text}>{preco}</Text>
        <Text style={styles.Text}>{telProdutor}</Text>
      </View>
    </View>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  view: {
    borderWidth: 1.1,
    marginTop: "2%",
    marginBottom: "2%",
    marginHorizontal:'3%',
    flexDirection: "row",
    backgroundColor: "#fff",
    justifyContent:'space-between'
  },
  Image: {
    width: 120,
    height: 120,
  },
  Text: {
    textAlign:'right',
    fontSize: 17,
    fontStyle: 'italic'
    },
    viewText:{
      backgroundColor:'#fff',
      paddingRight:9,
    }
});
export default Card;
