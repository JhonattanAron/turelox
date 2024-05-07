import { combineReducers } from "@reduxjs/toolkit"
import Session from "./reducers/Session"
import DashBoardSlice from "./reducers/DashBoardSlice"
import ConfirmData from "./reducers/ConfirmData"

const RootReducer = combineReducers({
    session: Session,
    dashboard_data:DashBoardSlice,
    confirm_data:ConfirmData
})

export default RootReducer