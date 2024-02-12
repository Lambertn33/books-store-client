import { useState, useEffect } from "react";

import { useAppDispatch } from "@/store/store";

import { booksActions } from "@/store/books/booksSlice";

import { TextInput } from "flowbite-react";

import { IoIosSearch } from "react-icons/io";

const AppSearchInput = () => {
  const dispatch = useAppDispatch();

  const [filters, setFilters] = useState({
    title: "",
  });

  useEffect(() => {
    dispatch(booksActions.filterBooks(filters));
  }, [dispatch, filters]);

  const setFiltersHandler = (input: string, value: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [input]: value,
    }));
  };

  return (
    <div className="flex items-center">
      <TextInput
        type="text"
        placeholder="search book......"
        shadow
        value={filters.title}
        onChange={(e) => setFiltersHandler("title", e.target.value)}
        rightIcon={IoIosSearch}
      />
    </div>
  );
};

export default AppSearchInput;
