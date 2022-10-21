// Estilização
import { View, ScrollView, TouchableOpacity } from "./style";

// Dados
import producer from "../../../data/producer.json";

// Components
import Producers from "../Producers";

import { useState, useEffect } from "react";
 
export default function Home({ navigation }) {
  const [produce, setProduce] = useState([]);

  useEffect(() => {
    setProduce(producer);
  }, []);

  return (
    <View>
      {produce.length > 0 && (
        <ScrollView>
          {produce.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => navigation.push("CardFrutas", { producer: item })}>
              <Producers nameProducers={item.nameProducers} img={item.img} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </View>
  );
}
