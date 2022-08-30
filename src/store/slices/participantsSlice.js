import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase'

export const fetchParticipantsFromDb = createAsyncThunk('participants/fetchParticipantsFromDb', async function () {
    const participants = []
    const querySnapshot = await getDocs(collection(db, 'participants'))
    querySnapshot.forEach(doc => {
        participants.push(doc.data())
    })
    console.log(participants)
    return participants
})

const participantsSlice = createSlice({
    name: 'participants',
    initialState: {
        participants: [],
        status: null,
        error: null,
    },
    extraReducers: {
        [fetchParticipantsFromDb.pending]: state => {
            state.status = 'loading'
            state.error = null
        },
        [fetchParticipantsFromDb.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.participants = action.payload
        },
    },
})

export default participantsSlice.reducer
