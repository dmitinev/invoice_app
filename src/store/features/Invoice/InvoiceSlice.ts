import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Invoice } from 'src/types';
import { fetchInvoices } from './invoiceActions';

type loadingState = 'idle' | 'loading' | 'succeeded' | 'failed';
export type checkBoxName = 'draft' | 'pending' | 'paid';
type error = string | null;

interface InvoiceState {
  loadingStatus: loadingState;
  invoices: Invoice[];
  filteredInvoices: Invoice[];
  error: error;
  controlsChecked: { name: checkBoxName; checked: boolean }[];
}

const initialState: InvoiceState = {
  loadingStatus: 'idle',
  invoices: [],
  filteredInvoices: [],
  error: null,
  controlsChecked: [
    { name: 'draft', checked: false },
    { name: 'pending', checked: false },
    { name: 'paid', checked: false },
  ],
};

const invoiceSlice = createSlice({
  name: '@@invoice',
  initialState,
  reducers: {
    toggleCheckbox: (state, action: PayloadAction<checkBoxName>) => {
      state.controlsChecked = state.controlsChecked.map((checkbox) => {
        if (checkbox.name === action.payload) {
          return { name: checkbox.name, checked: !checkbox.checked };
        }
        return checkbox;
      });
      state.filteredInvoices = state.invoices.filter((invoice) => {
        return state.controlsChecked.find((checkbox) => {
          return invoice.status === checkbox.name && checkbox.checked;
        });
      });
    },
    deleteInvoice: (state, action: PayloadAction<string>) => {
      state.invoices = state.invoices.filter(
        (invoice) => invoice.id !== action.payload,
      );
      state.filteredInvoices = state.invoices;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchInvoices.pending, (state) => {
        state.loadingStatus = 'loading';
      })
      .addCase(fetchInvoices.fulfilled, (state, action) => {
        state.loadingStatus = 'succeeded';
        state.invoices = action.payload;
        state.filteredInvoices = action.payload;
      })
      .addCase(fetchInvoices.rejected, (state, action) => {
        state.loadingStatus = 'failed';
        state.error = action.payload ?? 'Failed to fetch invoices';
      });
  },
});

export default invoiceSlice.reducer;
export const { toggleCheckbox, deleteInvoice } = invoiceSlice.actions;
