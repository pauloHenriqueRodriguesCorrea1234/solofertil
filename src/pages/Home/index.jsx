// Estilização
import { View } from "./style";

// Components
import Login from "../Login";

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

        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
