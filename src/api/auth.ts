import axios from "axios";

const endpointUrl = "http://localhost:4000/api/auth";

interface authInputs {
  username: string;
  password: string;
}

export const register = async (inputs: authInputs) => {
  const response = await axios.post(`${endpointUrl}/register`, inputs, {});
  return await response.data;
};
export const login = async (inputs: authInputs) => {
  const response = await axios.post(`${endpointUrl}/login`, inputs, {});
  return await response.data;
};
