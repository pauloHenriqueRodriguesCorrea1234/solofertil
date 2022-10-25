import {
  View,
  TextInput,
  TouchableOpacityLogin,
  TextLogin,
  Text,
  TextTitle,
} from "./style";
import Header from "../../components/Header";
export default function ForgotPassword ({ navigation }) {
  return (
    <View>
      <Header />

      <TextTitle>Rsest password</TextTitle>
        <Text>
          Enter the e-mail associed with your account and we’ll send an e-mail
          with instructions to reset your password.
        </Text>
      <TextInput placeholderTextColor="#FFF" placeholder="E-Mail Addres" />
      <TouchableOpacityLogin onPress={() => navigation.push("Login")}>
        <TextLogin>LOGIN</TextLogin>
      </TouchableOpacityLogin>
    </View>
  );
}
