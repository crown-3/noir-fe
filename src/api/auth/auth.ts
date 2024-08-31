import apiKeys from "src/constants/apiKeys";
import LocalstorageKeys from "src/constants/localstorageKeys";
import Paths from "src/constants/paths";

import api from "../api";

export interface UserInfo {
  nickname: string;
  email: string;
  password: string;
}

export interface TokenResponseDTO {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}

export interface SignupRequest extends UserInfo {}

export const signup = async (requestData: SignupRequest) => {
  const response = await api.post(apiKeys.signup, requestData);

  return response.data;
};

export interface SigninRequest extends Omit<UserInfo, "nickname"> {}

export interface SigninResponse extends TokenResponseDTO {}

export const signin = async (requestData: SigninRequest) => {
  const response = await api.post<SigninResponse>(apiKeys.signin, requestData);

  return response.data;
};

export const setTokens = (tokens: Omit<SigninResponse, "expiresIn">) => {
  localStorage.setItem(LocalstorageKeys.AccessToken, tokens.accessToken);
  localStorage.setItem(LocalstorageKeys.RefreshToken, tokens.refreshToken);
};

export const removeTokens = () => {
  localStorage.removeItem(LocalstorageKeys.AccessToken);
  localStorage.removeItem(LocalstorageKeys.RefreshToken);
};

export const logout = () => {
  removeTokens();
  window.location.href = Paths.Onboarding;
};

export interface RefreshAccessTokenRequest {
  refreshToken: string;
}

export interface RefreshAccessTokenResponse extends TokenResponseDTO {}

export const refreshAccessToken = async (
  requestData: RefreshAccessTokenRequest,
) => {
  const response = await api.post<TokenResponseDTO>(
    apiKeys.refreshAccessToken,
    requestData,
  );

  return response.data;
};
