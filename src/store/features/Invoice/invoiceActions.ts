import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from 'src/store/store';
import { Invoice } from 'src/types';

export const fetchInvoices = createAsyncThunk<
  Invoice[],
  void,
  {
    state: RootState;
    rejectValue: string;
  }
>('@@invoice/fetchInvoices', async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios(`${import.meta.env.BASE_URL}/data.json`);
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
  }
});
