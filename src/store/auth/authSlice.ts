import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: number;
  username: string;
  points: number;
}

interface UserState {
  user: User | null;
  isAuthenticated: boolean;
}

const initialState: UserState = {
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },

    updateUserPoints(
      state,
      action: PayloadAction<{ type: string; points: number }>
    ) {
      const { points, type } = action.payload;
      state.user!.points =
        type === "ORDERMAKE"
          ? state.user!.points - points
          : state.user!.points + points;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
