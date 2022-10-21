// NAvegação de Telas
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

// Estilização
import { ViewApp } from "./AppStyle";

// Componets
import Login from "./src/pages/Login";
import Producers from "./src/pages/Producers";
import SignUp from "./src/pages/SignUp";
import ForgotPassword from "./src/pages/FotgotPassword";
import Home from "./src/pages/Home";

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
            name="Producers"
            component={Producers}
            options={{
              title: "",
              headerTransparent: true,
              headerShown: false,
            }}
          />

          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </ViewApp>
  );
}
