import { useEffect, useState } from "react";
import { ScrollView, TouchableOpacity, View } from "./style";
import CardFrutas from "../CardFrutas/index";
import Footer from "../../components/Footer";

export default function Product({ route, navigation }) {
  const { producers } = route.params;

  const [product, setProduct] = useState([]);

  useEffect(() => {
    setProduct(producers.product);
  }, [product]);

  return (
    <View>
      {product.length > 0 && (
        <ScrollView>
          {product.map((item) => (
            <TouchableOpacity key={item.id}
              onPress={() => navigation.push("Details")}
            >
              <CardFrutas productName={item.name} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
      <Footer />
    </View>
  );
}
