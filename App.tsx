import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SecureStore from "expo-secure-store";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";
import { HomeScreen, LoginScreen as LoginScreen } from "./screens";
import { AuthContext } from "./auth/AuthContext";
import { CombinedDarkTheme, CombinedDefaultTheme } from "./theme";

const Stack = createNativeStackNavigator();

export default function App() {
  const scheme = useColorScheme();
  const [token, setToken] = useState("");
  const theme = scheme === "dark" ? CombinedDarkTheme : CombinedDefaultTheme;

  useEffect(() => {
    SecureStore.getItemAsync("userToken")
      .then((userToken) => {
        setToken(userToken || "");
      })
      .catch((e) => console.log({ e }));
  }, []);

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <StatusBar style="auto" />
        <AuthContext.Provider value={{ token, setToken }}>
          <Stack.Navigator>
            {token ? (
              <Stack.Screen name="Home" component={HomeScreen} />
            ) : (
              <Stack.Screen
                name="Login"
                options={{ title: "Login / Register" }}
                component={LoginScreen}
              />
            )}
          </Stack.Navigator>
        </AuthContext.Provider>
      </NavigationContainer>
    </PaperProvider>
  );
}
