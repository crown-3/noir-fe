import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import LocalstorageKeys from "src/constants/localstorageKeys";

import {
  logout,
  refreshAccessToken,
  setTokens,
  TokenResponseDTO,
} from "./auth/auth";

const api = axios.create({
  baseURL: "/local",
});

const onAxiosRequest = async (
  config: InternalAxiosRequestConfig,
): Promise<InternalAxiosRequestConfig> => {
  const accessToken = localStorage.getItem(LocalstorageKeys.AccessToken);

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
};

const onAxiosRequestError = (error: AxiosError | Error): Promise<AxiosError> =>
  Promise.reject(error);

api.interceptors.request.use(onAxiosRequest, onAxiosRequestError);

const onAxiosResponse = async (
  response: AxiosResponse,
): Promise<AxiosResponse> => {
  return response;
};

const EMPTY_TOKEN_RESPONSE: TokenResponseDTO = {
  accessToken: "",
  refreshToken: "",
  expiresIn: 0,
};

const onAxiosResponseError = async (error: AxiosError): Promise<AxiosError> => {
  const isAccessTokenExpired = error.response?.status === 401;
  const refreshToken = localStorage.getItem(LocalstorageKeys.RefreshToken);

  if (!isAccessTokenExpired || !refreshToken) {
    return Promise.reject(error);
  }
  console.log("accesstoken expired.");

  const originalRequest = error.config;
  if (!originalRequest) {
    return Promise.reject(error);
  }

  const refreshAccessTokenResponse = await refreshAccessToken({ refreshToken });

  if (refreshAccessTokenResponse === EMPTY_TOKEN_RESPONSE) {
    console.log("refreshtoken expired.");
    logout();
    return Promise.resolve(error);
  }

  const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
    refreshAccessTokenResponse;

  setTokens({ accessToken: newAccessToken, refreshToken: newRefreshToken });
  return api(originalRequest);
};

api.interceptors.response.use(onAxiosResponse, onAxiosResponseError);

export default api;
