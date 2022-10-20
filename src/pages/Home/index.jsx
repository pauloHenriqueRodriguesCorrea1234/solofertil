// Estilização
import { View } from "./style";

// Components
import Login from "../Login";
import SignUp from "../SignUp";
import ForgotPassword from "../FotgotPassword";

// Para navegação de telas
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

export default function Home() {
  return (
    <View>
      <NavigationContainer>
        <Stack.Navigator>
          {/* Telas */}
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

        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
