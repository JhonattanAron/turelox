import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import FactureInterface from "../../interfaces/FacInterface";

interface FactureDataState {
  factures_data: FactureInterface[];
  loading: boolean;
  error: string | null;
}

const initialState:FactureDataState = {
  factures_data: [],
  loading: false,
  error: null,
};

export const fecthFactures = createAsyncThunk(
  "factures/fecthFactures",
  async (id: string | undefined ) => {
    const response = await fetch(`http://localhost:8085/fatures/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch beneficios");
    }
    const dataJson = await response.json();
    return dataJson;
  }
);

const FactureDataSlice = createSlice({
  name: "factures_data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fecthFactures.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fecthFactures.fulfilled, (state, action: PayloadAction<FactureInterface[]>) => {
        state.loading = false;
        state.factures_data = action.payload;
        state.error = null;
      })
      .addCase(fecthFactures.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch beneficios";
      });
  },
});

export default FactureDataSlice.reducer;
