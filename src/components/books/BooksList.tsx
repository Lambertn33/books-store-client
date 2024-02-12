import { FC } from "react";

import BookDetails from "./BookDetails";

interface bookInterface {
  id: number;
  cover_image: string;
  title: string;
  price: number;
}

interface booksListProps {
  books: bookInterface[];
}

const BooksList: FC<booksListProps> = ({ books }) => {
  return (
    <div className="grid grid-cols xl:grid-cols-3 gap-x-12 gap-y-6 justify-center xl:justify-normal">
      {books.map((book) => (
        <BookDetails key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BooksList;
