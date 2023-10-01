import { configureStore } from '@reduxjs/toolkit'

import userDataReducer from './userDataSlice';

export const store = configureStore({
  reducer: {
    user_data: userDataReducer,
  },
})