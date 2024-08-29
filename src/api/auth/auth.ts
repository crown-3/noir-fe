import api from "../api";

export interface UserInfo {
  nickname: string;
  email: string;
}

interface SignupRequest extends UserInfo {
  password: string;
}

export const signup = async (requestData: SignupRequest) => {
  const response = await api.post(apiKeys.signup, requestData);

  return response.data;
};
