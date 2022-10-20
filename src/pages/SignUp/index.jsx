import { ViewTudo, TextInput } from "./style";

import { Text, TouchableOpacity } from "react-native";
import Header from "../../components/Header";
export default function SignUp({ navigation }) {
  return (
    <ViewTudo>
      <Header />
      <TextInput placeholder="Informe seu nome"></TextInput>
      <TextInput placeholder="Informe seu E-mail"></TextInput>
      <TextInput placeholder="Escolha uma senha"></TextInput>
      <TextInput placeholder="Confirme sua senha"></TextInput>

      <TouchableOpacity onPress={() => navigation.push("Producers Card")}>
        <Text>SIGN UP</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.push("Login")}>
        <Text>LOGIN</Text>
      </TouchableOpacity>
    </ViewTudo>
  );
}
