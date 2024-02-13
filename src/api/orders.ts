import axios from "axios";

import { backendUrl } from "@/helpers/url";

const token = localStorage.getItem("token");

const config = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

interface orderInterface {
  id: number;
  amount: number;
  status: "ORDERED" | "CANCELED";
  userId: number;
  createdAt: string;
}

export const getMyOrders = async (userId: number) => {
  const response = await axios.get(`${backendUrl}orders/${userId}`, config);
  return (await response.data) as orderInterface[];
};
