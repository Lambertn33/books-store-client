import axios from "axios";

const endpointUrl = "http://localhost:4000/api";

export const getAllBooks = async () => {
  const response = await axios.get(`${endpointUrl}/books`);
  return await response.data;
};
