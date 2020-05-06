import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";

const Login = () => {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  return (
    <View style={styles.container}>
      <TextInput
        label="Name"
        value={name}
        onChangeText={(text) => setName(text)}
        style={styles.textInputs}
      />
      <TextInput
        label="Password"
        value={password}
        textContentType="password"
        onChangeText={(text) => setPassword(text)}
        style={styles.textInputs}
      />
      <Button
        mode="contained"
        onPress={() => console.log("Pressed")}
        style={styles.textInputs}
        color="#22181C"
      >
        Login
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "#9DCBBA",
    width: "80%",
    height: 300,
    borderRadius: 50,
  },
  textInputs: {
    margin: 10,
  },
});

export default Login;
