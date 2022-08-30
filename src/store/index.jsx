import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import blankReducer from './slices/blankSlice'
import participantReducer from './slices/participantsSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        blanks: blankReducer,
        participants: participantReducer,
    },
})
