import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

interface SessionState {
  isLogin: boolean;
  isLogout: boolean;
  error: null | string;
}

const initialState: SessionState = {
  isLogin: Cookies.get("isLogin") === "true",
  isLogout: true,
  error: null,
};

const Session = createSlice({
  name: "Session",
  initialState,
  reducers: {
    Login: (state) => {
      state.isLogin = true;
      Cookies.set("isLogin", "true", { expires: 7 }); 
    },
    Logout: (state) => {
      state.isLogin = false;
      Cookies.remove("isLogin"); 
    },
  },
});

export const { Login, Logout } = Session.actions;

export default Session.reducer;
