import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import blankReducer from './slices/blankSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        blanks: blankReducer,
    },
})
