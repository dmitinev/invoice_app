import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'src/store/store';

const selected = (state: RootState) => state;

export const selectInvoices = createSelector(
  selected,
  (state) => state.invoice.invoices,
);
