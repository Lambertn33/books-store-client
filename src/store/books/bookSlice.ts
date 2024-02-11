import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { getSingleBook } from "@/api/books";

interface BookInterface {
  id: number;
  cover_image: string;
  title: string;
  price: number;
  writer: string;
  tags: string[];
}

interface SingleBookSliceInterface {
  book: BookInterface | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

export const fetchSingleBook = createAsyncThunk(
  "book/fetchSingleBook",
  async (bookId: string) => {
    const response = await getSingleBook(bookId);
    return response as BookInterface;
  }
);

const singleBookSlice = createSlice({
  name: "book",
  initialState: {
    book: null,
    error: null,
    status: "idle",
  } as SingleBookSliceInterface,

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleBook.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchSingleBook.fulfilled,
        (state, action: PayloadAction<BookInterface>) => {
          state.status = "succeeded";
          state.book = action.payload;
        }
      )
      .addCase(fetchSingleBook.rejected, (state, action) => {
        state.error = action.error.message ?? "An error occurred";
        state.status = "failed";
      });
  },
});

export const singleBookActions = singleBookSlice.actions;

export default singleBookSlice.reducer;
