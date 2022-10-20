import Header from "../../components/Header";
import { Image, Text, View } from "./style";

export default function Producers({ img, nameProducers }) {
  return (
    <View>
        <Image source={{ uri: img }} />
        <Text>{nameProducers}</Text>
    </View>
  );
}
