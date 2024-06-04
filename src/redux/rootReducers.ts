import { combineReducers } from "@reduxjs/toolkit"
import Session from "./reducers/Session"
import DashBoardSlice from "./reducers/DashBoardSlice"
import ConfirmData from "./reducers/ConfirmData"
import GetDataFactures from "./reducers/GetDataFactures"

const RootReducer = combineReducers({
    session: Session,
    dashboard_data:DashBoardSlice,
    confirm_data:ConfirmData,
    get_data_factures:GetDataFactures
})

export default RootReducer