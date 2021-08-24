import { configureStore } from '@reduxjs/toolkit';
import mailReducer from '../features/mailReducer';

export const store = configureStore({
  reducer: {
    mail: mailReducer,
  },
});
