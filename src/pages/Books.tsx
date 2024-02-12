import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@/store/store";

import { fetchBooks } from "@/store/books/booksSlice";

import { RootState } from "@/store/store";

import { TheSpinner } from "@/UI";

import BooksList from "@/components/books/BooksList";

const Books = () => {
  const dispatch = useAppDispatch();

  const { books, error, status, filteredBooks, isFiltering } = useAppSelector(
    (state: RootState) => state.books
  );

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchBooks());
    };

    fetchData();
  }, [dispatch]);

  if (error) return <p>Error</p>;

  if (status === "idle" || status === "loading")
    return (
      <div className="flex justify-center items-center">
        <TheSpinner />
      </div>
    );

  return (
    <div>
      <BooksList books={isFiltering ? filteredBooks : books} />
    </div>
  );
};

export default Books;
