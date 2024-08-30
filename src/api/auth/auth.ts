import apiKeys from "src/constants/apiKeys";

import api from "../api";

export interface UserInfo {
  nickname: string;
  email: string;
  password: string;
}

export interface SignupRequest extends UserInfo {}

export const signup = async (requestData: SignupRequest) => {
  const response = await api.post(apiKeys.signup, requestData);

  return response.data;
};

export interface SigninRequest extends Omit<UserInfo, "nickname"> {}

export interface SigninResponse {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}

export const signin = async (requestData: SigninRequest) => {
  const response = await api.post<SigninResponse>(apiKeys.signin, requestData);

  return response.data;
};
