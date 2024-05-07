import { createSlice } from "@reduxjs/toolkit";

interface ConfirmDataState {
    confirmdata: boolean;
}

const initialState: ConfirmDataState = {
    confirmdata: false,
}

const ConfirmData = createSlice({
    name: 'confirmdata',
    initialState,
    reducers: {
        ConfirmDataSet: (state) => {
            state.confirmdata = true;
        },
        DesconfirmDataSet: (state) => {
            state.confirmdata = false;
        }
    }
})

export const { ConfirmDataSet , DesconfirmDataSet } = ConfirmData.actions;

export default ConfirmData.reducer;
