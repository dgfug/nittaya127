import React from "react";
import { Text, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Button } from "react-native-paper";
import { useAuth } from "../auth/AuthContext";

export default function HomeScreen() {
  const { colors } = useTheme();
  const { token, setToken } = useAuth();

  const signOut = () => setToken("");

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ color: colors.text }}>Home Screen</Text>
      <Button mode="contained" onPress={signOut}>
        Sign out
      </Button>
    </View>
  );
}
