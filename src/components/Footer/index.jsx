import { Image, Text, TouchableOpacity, View } from "./style";
import logo from "../../assets/img/logoInstagran.png";
import { Linking } from "react-native";
export default function Footer() {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          Linking.openURL(
            "https://www.instagram.com/solo_fertil_campus_aquidauana/"
          );
        }}
      >
        <Text>@solo_fertil_campus_aquidauana</Text>
        <Image source={logo} />
      </TouchableOpacity>
    </View>
  );
}
