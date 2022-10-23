// Estilização
import { View } from "./style";
import { TouchableOpacity, ScrollView } from "react-native";
// Dados
import { producer } from "../../../data/producer.json";
// Components
import Producers from "../Producers";
// Estados
import { useState, useEffect } from "react";

export default function Home() {  
  const [produce, setProduce] = useState([]);

  useEffect(() => {
    setProduce({producer});
  }, []);
  return (
    <View>
      {produce.length > 0 && (
        <ScrollView>
          {produce.map((item) => (
            <TouchableOpacity key={item.id}>
              <Producers nameProducers={item.nameProducers} img={item.img} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </View>
  );
}
