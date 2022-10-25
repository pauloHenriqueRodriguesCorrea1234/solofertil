// NAvegação de Telas
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

// Estilização
import { ViewApp } from "./AppStyle";

// Componets
import Login from "./src/pages/Login";
import CardFrutas from "./src/pages/CardFrutas";
import SignUp from "./src/pages/SignUp";
import ForgotPassword from "./src/pages/FotgotPassword01";
import Home from "./src/pages/Home";
import Producers from "./src/pages/Producers";

import { StatusBar } from "react-native";

export default function App() {
  return (
    <ViewApp>
      <StatusBar />
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
          <Stack.Screen name="CardFrutas" component={CardFrutas} />
        </Stack.Navigator>
      </NavigationContainer>
    </ViewApp>
  );
}
