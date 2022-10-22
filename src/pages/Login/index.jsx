// Componentes
import Header from "../../components/Header/index";
import {
  TextInput,
  View,
  TouchableOpacitySignUp,
  TouchableOpacityLogin,
  TouchableOpacityForgotPasspoword,
  TextSignUp,
  Text,
  TextForgot,
} from "./style";
export default function Login({ navigation }) {
  return (
    <View>
      <Header />

      <TextInput
        placeholderTextColor="#FFF"
        placeholder={"Informe seu E-mail"}
      ></TextInput>
      <TextInput
        placeholderTextColor="#FFF"
        secureTextEntry={true}
        placeholder={"Informe sua senha"}
      ></TextInput>

      <TouchableOpacityLogin onPress={() => navigation.push("Home")}>
        <Text>LOGIN</Text>
      </TouchableOpacityLogin>

      <TouchableOpacityForgotPasspoword
        onPress={() => navigation.push("Forgot Password")}
      >
        <TextForgot>Forgot your passpoword?</TextForgot>
      </TouchableOpacityForgotPasspoword>

      <TouchableOpacitySignUp onPress={() => navigation.push("Sign up")}>
        <TextSignUp>SIGN UP</TextSignUp>
      </TouchableOpacitySignUp>
    </View>
  );
}
