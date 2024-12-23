import React from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import { useLoginViewModel } from "./view.model";
const LoginView = () => {
  const { email, password, setEmail, setPassword, isLoading, onSubmit } =
    useLoginViewModel();

  return (
    <View style={styles.SafeArea}>
      <TextInput
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        style={styles.TextInput}
      />
      <TextInput
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        style={styles.TextInput}
      />
      <Button title="Entrar" onPress={onSubmit} disabled={isLoading} />
    </View>
  );
};

export default LoginView;

const styles = StyleSheet.create({
  SafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 40,
    paddingBottom: 20,
    alignItems: "center",
    justifyContent: "flex-end",
    margin: 16,
    gap: 16,
  },
  TextInput: {
    borderWidth: 1,
    borderColor: "#000",
    fontSize: 22,
    width: "100%",
    padding: 16,
  },
});
