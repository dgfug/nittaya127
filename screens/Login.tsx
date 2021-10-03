import React, { useState } from "react";
import { View } from "react-native";
import { Button, Card, TextInput } from "react-native-paper";
import { useAuth } from "../auth/AuthContext";

export default function SignInScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setToken } = useAuth();
  const signIn = () => {
    setToken("token");
  };

  return (
    <View
      style={{
        height: "85%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card style={{ width: "80%", height: "auto", padding: 8 }}>
        <Card.Title title="Login / Register" subtitle="Enter your account" />
        <Card.Content style={{ marginVertical: 20 }}>
          <TextInput
            label="Email"
            returnKeyType="next"
            mode="outlined"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            autoCompleteType="email"
            textContentType="emailAddress"
            keyboardType="email-address"
          />
          <TextInput
            label="Password"
            returnKeyType="done"
            mode="outlined"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </Card.Content>
        <Card.Actions>
          <Button mode="contained" style={{ width: "100%" }} onPress={signIn}>
            Enter
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
}
