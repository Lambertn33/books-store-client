import axios from "axios";

import { backendUrl } from "@/helpers/url";

interface bookInterface {
  id: number;
  cover_image: string;
  title: string;
  price: number;
}

interface bookMoreDetailsInterface extends bookInterface {
  writer: string;
  tags: string[];
}

export const getAllBooks = async () => {
  const response = await axios.get(`${backendUrl}books`);
  return (await response.data) as bookInterface[];
};

export const getSingleBook = async (bookId: string) => {
  const response = await axios.get(`${backendUrl}books/${bookId}`);
  return (await response.data.book) as bookMoreDetailsInterface;
};
