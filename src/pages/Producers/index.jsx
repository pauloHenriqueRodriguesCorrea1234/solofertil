import Header from "../../components/Header";
import Footer  from "../../components/Footer";
import { Image, Text, View, ViewCard } from "./style";

export default function Producers({ img, nameProducers }) {
  return (
    <View>
      <Header />
      <ViewCard>
        <Image source={{ uri: img }} />
        <Text>{nameProducers}</Text>
      </ViewCard>
      <Footer/>
    </View>
  );
}
