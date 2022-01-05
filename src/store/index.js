import { configureStore } from '@reduxjs/toolkit'

//#4
import userReducer from './userSlice'

// #1 Create the store using the configure store method from redux and export it
export const store = configureStore({
  reducer: {
    user: userReducer
  },
})