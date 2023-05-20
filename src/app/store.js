import { configureStore } from '@reduxjs/toolkit'
import languageReducer from '../features/languageSlice';

export default configureStore({
    reducer: {
        language: languageReducer,
    }
})