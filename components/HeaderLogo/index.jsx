import React from "react";

import { Image, StyleSheet, View } from "react-native";

const Header = ({ logo }) => {
  return (
    <View style={styles.containerLogo}>
      <Image source={logo} style={styles.igagem} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerLogo: {
    marginTop: 29,
    width: "100%",
    height: 140,
    backgroundColor: "#002e00",
    alignItems: "center",
    justifyContent: "center",
  },
  igagem: {
    height: 200,
    width: 200,
  },
});

export default Header;
