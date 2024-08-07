import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createUser } from "../Thunks/UserThunks";
import User from "../../interfaces/UserModel";
import { LoginUser } from "../api/AuthApi";
export interface PostState {
  items: User[];
  status: string;
  error: string | null;
}

const initialState: PostState = {
  items: [],
  status: "",
  error: null,
};

const AuthSlice = createSlice({
  name: "AuthControlApi",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.status = "success";
        state.items.push(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to create user";
      });
  },
});

// Exportar el reducer
export default AuthSlice.reducer;
