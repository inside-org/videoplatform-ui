import { createSlice } from '@reduxjs/toolkit'

export const testSlice = createSlice({
    name: "test",
    initialState: {
        test: 'test'
    },
    reducers: {
        addTest: state => {
            state.test = 'mytest'
        },
    }
});

export const { addTest } = testSlice.actions