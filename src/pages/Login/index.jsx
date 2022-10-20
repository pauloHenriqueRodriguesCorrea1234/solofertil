// Componentes
import Header from "../../components/Header/index";
import {
  TextInput,
  ViewTextInput,
  ViewTudo,
  TouchableOpacitySignUp,
  TouchableOpacityLogin,
  TouchableOpacityForgotPasspoword,
  Viewlogin,
  ViewText,
  TextP,
} from "./style";
import { Text } from "react-native";
export default function Login({ navigation }) {
  return (
    <ViewTudo>
      <Header />
      <ViewTextInput>
        <TextInput
          placeholderTextColor="#FFF"
          placeholder={"Informe seu E-mail"}
        ></TextInput>
        <TextInput
          placeholderTextColor="#FFF"
          secureTextEntry={true}
          placeholder={"Informe sua senha"}
        ></TextInput>

        <TouchableOpacityLogin
          onPress={() => navigation.push("Producers Card")}
        >
          <Viewlogin>
            <Text>LOGIN</Text>
          </Viewlogin>
        </TouchableOpacityLogin>

        <TouchableOpacityForgotPasspoword
          onPress={() => navigation.push("Forgot Password")}
        >
          <ViewText>
            <TextP>Forgot your passpoword?</TextP>
          </ViewText>
        </TouchableOpacityForgotPasspoword>

        <TouchableOpacitySignUp onPress={() => navigation.push("Sign up")}>
          <ViewText>
            <TextP>SIGN UP</TextP>
          </ViewText>
        </TouchableOpacitySignUp>
      </ViewTextInput>
    </ViewTudo>
  );
}
