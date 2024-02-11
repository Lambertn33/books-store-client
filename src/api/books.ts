import axios from "axios";

const endpointUrl = "http://localhost:4000/api/books";

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
  const response = await axios.get(`${endpointUrl}`);
  return (await response.data) as bookInterface[];
};

export const getSingleBook = async (bookId: string) => {
  const response = await axios.get(`${endpointUrl}/${bookId}`);
  return (await response.data.book) as bookMoreDetailsInterface;
};
