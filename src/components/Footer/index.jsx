import { Image, Text, View } from "./style";
import logo from "../../assets/img/logoInstagran.png";
export default function Footer() {
  return (
    <View>
      <Text>@solo_fertil_campus_aquidauana</Text>
      <Image source={logo} />
    </View>
  );
}
