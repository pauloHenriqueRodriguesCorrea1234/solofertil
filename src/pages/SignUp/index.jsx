import { ViewTudo, TextInput, TouchableOpacity  } from "./style";

import { Text, } from "react-native";
import Header from "../../components/Header";
export default function SignUp({ navigation }) {
  return (
    <ViewTudo>
      <Header />
      <TextInput
        placeholderTextColor="#FFF"
        placeholder="Informe seu nome"
      ></TextInput>
      <TextInput
        placeholderTextColor="#FFF"
        placeholder="Informe seu E-mail"
      ></TextInput>
      <TextInput
        placeholderTextColor="#FFF"
        secureTextEntry={true}
        placeholder="Escolha uma senha"
      ></TextInput>
      <TextInput
        placeholderTextColor="#FFF"
        secureTextEntry={true}
        placeholder="Confirme sua senha"
      ></TextInput>

      <TouchableOpacity onPress={() => navigation.push("Home")}>
        <Text>SIGN UP</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.push("Login")}>
        <Text>LOGIN</Text>
      </TouchableOpacity>
    </ViewTudo>
  );
}
