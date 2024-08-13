import { createAsyncThunk } from "@reduxjs/toolkit";
import { GetUserById, LoginUser, RegisterUser } from "../api/AuthApi";
import User from "../../interfaces/UserModel";

export const createUser = createAsyncThunk(
  "posts/createUser",
  async (postData: User, { rejectWithValue }) => {
    try {
      return await RegisterUser(postData);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const LoginUserThunk = createAsyncThunk(
  "posts/loginUser",
  async (postData: User, { rejectWithValue }) => {
    try {
      return await LoginUser(postData);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const GetUserByIdThunk = createAsyncThunk(
  "posts/loginUser",
  async (getData: string | undefined, { rejectWithValue }) => {
    if (getData === undefined) {
      return "id not found";
    }
    try {
      return await GetUserById(getData);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
