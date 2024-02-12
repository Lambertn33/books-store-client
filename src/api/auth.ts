import axios from "axios";

import { backendUrl } from "@/helpers/url";

interface authInputs {
  username: string;
  password: string;
}

export const register = async (inputs: authInputs) => {
  const response = await axios.post(`${backendUrl}auth/register`, inputs, {});
  return await response.data;
};

export const login = async (inputs: authInputs) => {
  const response = await axios.post(`${backendUrl}auth/login`, inputs, {});
  return await response.data;
};
