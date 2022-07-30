import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { collection, getDocs, doc, deleteDoc, addDoc, setDoc } from 'firebase/firestore'
import { db } from '../../firebase'

export const fetchBlanksFromDb = createAsyncThunk('blanks/fetchBlanksFromDb', async function () {
    const blanksData = []
    const querySnapshot = await getDocs(collection(db, 'blanks'))
    querySnapshot.forEach(doc => {
        blanksData.push({ id: doc.id, ...doc.data() })
    })
    return blanksData
})

export const deleteBlankFromDb = createAsyncThunk('blanks/deleteBlankFromDb', async function ({ id }, { dispatch }) {
    await deleteDoc(doc(db, 'blanks', id))
    dispatch(removeBlank({ id }))
})

export const editBlankInDb = createAsyncThunk('blanks/editBlankInDb', async function ({ id, blank }, { dispatch }) {
    await setDoc(doc(db, 'blanks', id), {
        ...blank,
    })
    dispatch(editBlank({ id, ...blank }))
})

export const addBlankToDb = createAsyncThunk('blanks/addBlankToDb', async function ({ blank }, { dispatch }) {
    const docRef = await addDoc(collection(db, 'blanks'), blank)
    addBlank({ id: docRef.id, ...blank })
})

const blankSlice = createSlice({
    name: 'blanks',
    initialState: {
        blanks: [],
        status: null,
        error: null,
    },
    reducers: {
        addBlank(state, action) {
            state.blanks.push(action.payload.blank)
        },
        removeBlank(state, action) {
            state.blanks = state.blanks.filter(blank => blank.id !== action.payload.id)
        },
        editBlank(state, action) {
            state.blanks = state.blanks.map(blank => (blank.id === action.payload.id ? action.payload : blank))
        },
    },
    extraReducers: {
        [fetchBlanksFromDb.pending]: state => {
            state.status = 'loading'
            state.error = null
        },
        [fetchBlanksFromDb.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.blanks = action.payload
        },
        [fetchBlanksFromDb.rejected]: (state, action) => {},
    },
})
export const { addBlank, removeBlank, editBlank } = blankSlice.actions

export default blankSlice.reducer
