import React from "react";
import { login } from "../../common/models/repositories/auth.repository";

export const useLoginViewModel = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const onSubmit = async () => {
    try {
      setIsLoading(true);
      const response = await login({ email, password });
      console.log("response", response);
      //TODO: Navegar
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    email,
    password,
    isLoading,
    setEmail,
    setPassword,
    onSubmit,
  };
};
