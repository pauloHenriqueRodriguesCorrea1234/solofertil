// Navegação de Tela
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

// Estilização
import { View } from "./style";

// Componets
import Login from "../Login";
import SignUp from "../SignUp";
import ForgotPassword from "../FotgotPassword01";
import Home from "../Home";
import Product from "../Product";
import Details from "../Details";

export default function Route() {
  return (
    <View>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              title: "",
              headerTransparent: true,
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Sign up"
            component={SignUp}
            options={{
              title: "",
              headerTransparent: true,
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Forgot Password"
            component={ForgotPassword}
            options={{
              title: "",
              headerTransparent: true,
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: "",
              headerTransparent: true,
              headerShown: false,
            }}
          />

          <Stack.Screen name="Product" component={Product} />

          <Stack.Screen
            name="Details"
            component={Details}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
