import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { getAllBooks } from "@/api/books";

interface bookInterface {
  id: number;
  cover_image: string;
  title: string;
  price: number;
}

interface BooksSliceInterface {
  books: bookInterface[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  filteredBooks: bookInterface[];
  isFiltering: boolean;
}

interface Filters {
  title: string;
}

export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
  const response = await getAllBooks();
  return response as bookInterface[];
});

const booksSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
    error: null,
    isFiltering: false,
    filteredBooks: [],
    status: "idle",
  } as BooksSliceInterface,

  reducers: {
    filterBooks: (state, action: PayloadAction<Filters>) => {
      const { title } = action.payload;
      state.isFiltering = true;
      state.filteredBooks = state.books.filter((book) => {
        return book.title.toLowerCase().includes(title.toLowerCase());
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchBooks.fulfilled,
        (state, action: PayloadAction<bookInterface[]>) => {
          state.status = "succeeded";
          state.books = action.payload;
        }
      )
      .addCase(fetchBooks.rejected, (state, action) => {
        state.error = action.error.message ?? "An error occurred";
        state.status = "failed";
      });
  },
});

export const booksActions = booksSlice.actions;

export default booksSlice.reducer;
