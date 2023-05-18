import { configureStore } from '@reduxjs/toolkit'
import { testSlice } from '../store/slice/TestSlice'

const store = configureStore({
    reducer: {
        test: testSlice.reducer,
    },
});

export default store