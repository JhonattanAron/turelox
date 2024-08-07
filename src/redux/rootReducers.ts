import { combineReducers } from "@reduxjs/toolkit";
import Session from "./Slices/Session";
import DashBoardSlice from "./Slices/DashBoardSlice";
import ConfirmData from "./Slices/ConfirmData";
import AuthSlice from "./Slices/AuthSlice";

const RootReducer = combineReducers({
  session: Session,
  dashboard_data: DashBoardSlice,
  confirm_data: ConfirmData,
  auth_controll: AuthSlice,
});

export default RootReducer;
