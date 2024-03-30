import { createSlice } from '@reduxjs/toolkit';
import { Invoice } from 'src/types';
import { fetchInvoices } from './invoiceActions';

type loadingState = 'idle' | 'loading' | 'succeeded' | 'failed';
type error = string | null;

interface InvoiceState {
  loadingStatus: loadingState;
  invoices: Invoice[];
  filteredInvoices: Invoice[];
  error: error;
}

const initialState: InvoiceState = {
  loadingStatus: 'idle',
  invoices: [],
  filteredInvoices: [],
  error: null,
};

const invoiceSlice = createSlice({
  name: 'invoice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchInvoices.pending, (state) => {
        state.loadingStatus = 'loading';
      })
      .addCase(fetchInvoices.fulfilled, (state, action) => {
        state.loadingStatus = 'succeeded';
        state.invoices = action.payload;
      })
      .addCase(fetchInvoices.rejected, (state, action) => {
        state.loadingStatus = 'failed';
        state.error = action.payload ?? 'Failed to fetch invoices';
      });
  },
});

export default invoiceSlice.reducer;
