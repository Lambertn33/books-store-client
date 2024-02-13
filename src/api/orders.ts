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

interface orderBook {
  cover_image: string;
  price: number;
  title: string;
  writer: string;
  tags: string[];
}

interface orderBooksInterface extends orderInterface {
  books: { book: orderBook }[];
}

export const getMyOrders = async (userId: number) => {
  const response = await axios.get(`${backendUrl}orders/${userId}`, config);
  return (await response.data) as orderInterface[];
};

export const getSingleOrder = async (userId: number, orderId: number) => {
  const response = await axios.get(
    `${backendUrl}orders/${userId}/${orderId}`,
    config
  );
  return (await response.data) as orderBooksInterface;
};
