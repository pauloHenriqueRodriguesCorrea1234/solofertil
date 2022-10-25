// Elemetos Estilizados
import {
  View,
  TextInput,
  TouchableOpacitySignUp,
  TouchableOpacityLogin,
  Text,
  TextLogin,
} from "./style";

// Componentes
import Header from "../../components/Header";

export default function SignUp({ navigation }) {
  return (
    <View>
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

      <TouchableOpacitySignUp onPress={() => navigation.push("Home")}>
        <Text>SIGN UP</Text>
      </TouchableOpacitySignUp>

      <TouchableOpacityLogin onPress={() => navigation.push("Login")}>
        <TextLogin>LOGIN</TextLogin>
      </TouchableOpacityLogin>
    </View>
  );
}
