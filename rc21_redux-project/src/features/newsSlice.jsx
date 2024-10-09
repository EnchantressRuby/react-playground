import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"

export const getData = createAsyncThunk("newsSlice/getData", async () => {
  const response = await axios(
    "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=81a4163ea7eb4bccb489151972100adb"
  );

  return response.data.articles

})

export const newsSlice = createSlice({
  name: "newsSlice",

  initialState: {
    news: [],
    loading: true,
  },

  reducers: {
    clearNews: () => {

    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.loading = true
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.news = action.payload
        state.loading = false
      })
  },
})


export const { clearNews } = newsSlice.actions

export default newsSlice.reducer