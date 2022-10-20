import { Image, View } from "./style";
import logo from "../../assets/img/logoIFMS.png";

export default function Header() {
  return (
    <View>
      <Image source={logo} />
    </View>
  );
}
