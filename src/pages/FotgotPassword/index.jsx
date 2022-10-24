import { View, TextInput,TouchableOpacityLogin, TextLogin } from "./style";
import Header from "../../components/Header";
export default function ForgotPassword() {
  return (
    <View>
      <Header />

      <TextInput placeholderTextColor="#FFF"
        placeholder="Rsest password"/>

      <Text>Enter the e-mail associed with your account and we’ll send an e-mail with  instructions to reset your password.</Text>

      <TextInput placeholderTextColor="#FFF"
        placeholder="E-Mail Addres"/>

<TouchableOpacityLogin onPress={() => navigation.push("Login")}>
        <TextLogin>LOGIN</TextLogin>
      </TouchableOpacityLogin>
    </View>

  );
}
