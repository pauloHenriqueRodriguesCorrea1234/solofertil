import { Text, View} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { producers, product } from "../../../data/producer.json";

    export default function Telas({route}) {
        return (
            <View>
                {product.map((item))}
            </View>
        );
    }

