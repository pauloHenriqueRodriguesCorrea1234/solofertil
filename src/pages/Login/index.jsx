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
  Text,
  TextForgot,
} from "./style";
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

        <TouchableOpacityLogin onPress={() => navigation.push("Home")}>
          <Viewlogin>
            <Text>LOGIN</Text>
          </Viewlogin>
        </TouchableOpacityLogin>

        <TouchableOpacityForgotPasspoword
          onPress={() => navigation.push("Forgot Password")}
        >
          <ViewText>
            <TextForgot>Forgot your passpoword?</TextForgot>
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
