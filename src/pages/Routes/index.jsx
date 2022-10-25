import { View } from "react-native";
import { product } from "../../../data/producer.json";

    export default function Telas({route}) {
        return (
            <View>
                {product.map((item))}
            </View>
        );
    }

