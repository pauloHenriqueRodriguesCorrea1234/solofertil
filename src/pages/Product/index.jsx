import { useEffect, useState } from "react";
import { ScrollView, TouchableOpacity, View } from "./style";
import CardFrutas from "../CardFrutas/index";
import Footer from "../../components/Footer";

export default function Product({ route }) {
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
            <TouchableOpacity key={item.idProduct}>
              <CardFrutas productName={item.nameProduct} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
      <Footer/>
    </View>
  );
}
