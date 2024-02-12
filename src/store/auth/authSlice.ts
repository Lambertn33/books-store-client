import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: number;
  username: string;
  points: number;
}

interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: null,
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
