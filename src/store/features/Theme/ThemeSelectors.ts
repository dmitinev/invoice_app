import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'src/store/store';

const selected = (state: RootState) => state.theme;

export const selectTheme = createSelector(selected, (theme) => theme);
