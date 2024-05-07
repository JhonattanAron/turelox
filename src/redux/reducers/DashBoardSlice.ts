import { createSlice } from "@reduxjs/toolkit";

interface DashboardState{
    total_fatures: number;
    total_abbones: number;
    total_paid: number;
    total_active: number;
}

const initialState:DashboardState={
    total_fatures: 0,
    total_abbones: 0,
    total_active: 0,
    total_paid: 0
}

const Dashboard = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        TotalFatures:(state , action) =>{
            state.total_fatures = action.payload
        },
        TotalAbbones:(state , action) =>{
            state.total_fatures = action.payload
        },
        TotalPaid:(state , action) =>{
            state.total_fatures = action.payload
        },
        TotalActive:(state , action) =>{
            state.total_fatures = action.payload
        },

    }
})

export const {TotalFatures, TotalAbbones, TotalPaid, TotalActive} = Dashboard.actions;

export default Dashboard.reducer