import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createUser, GetUserByIdThunk } from "../Thunks/UserThunks";
import User from "../../interfaces/UserModel";
import { RootState } from "../../store";

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
      // Casos para createUser
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
      })
      // Casos para GetUserByIdThunk
      .addCase(GetUserByIdThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        GetUserByIdThunk.fulfilled,
        (state, action: PayloadAction<User>) => {
          state.status = "success";
          state.items = [action.payload];
        }
      )
      .addCase(GetUserByIdThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch user";
      });
  },
});

// Selector para obtener el primer usuario
export const selectUser = (state: RootState): User | undefined =>
  state.auth_controll.items[0];

// Exportar el reducer
export default AuthSlice.reducer;
