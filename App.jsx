// Estilização
import { ViewApp } from "./AppStyle";

// Componets
import Route from "./src/pages/Routes";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <ViewApp>
      <StatusBar />
      <Route />
    </ViewApp>
  );
}
