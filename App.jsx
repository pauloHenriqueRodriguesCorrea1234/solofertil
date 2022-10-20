import { StatusBar, View } from "react-native";
import Home from "./src/pages/Home";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar/>
      <Home />
    </View>
  );
}
