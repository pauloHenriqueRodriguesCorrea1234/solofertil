// Estilização
import { ScrollView, Text, TouchableOpacity, View } from "./style";

// Dados
import { producer } from "../../../data/producer.json";
// Components
import Producers from "../Producers";
// Estados
import { useState, useEffect } from "react";
import Header from "../../components/Header";
export default function Home() {
  const [produce, setProduce] = useState([]);

  useEffect(() => {
    setProduce(producer);
  }, []);
  return (
    <View>
      <Header />
      {produce.length && (
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
