import { UserModel } from "../user.model";
import client from "./client";

export interface LoginDTO {
  email: string;
  password: string;
}

export const login = async ({ email, password }: LoginDTO) => {
  const { data } = await client.post<UserModel>(email, password);
  return data;
};
