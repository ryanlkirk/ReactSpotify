import { createSlice } from '@reduxjs/toolkit'

const validLang = ["en", "fr"];

export const languageSlice = createSlice({
  name: 'counter',
  initialState: {
    value: "en",
  },
  reducers: {
    changeLangauge: (state, action) => {
        if(validLang.indexOf(action.payload) >= 0){
            state.value = action.payload;
        } else {
            // fallback to English incase of incorrect lang (probably a typo)
            state.value = "en"
        }
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeLangauge } = languageSlice.actions

export default languageSlice.reducer