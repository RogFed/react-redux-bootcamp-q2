import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import loginApi from '../../utils/loginApi'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: null,
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(attemptLogin.pending, (state, action) => {
      state.status = 'loading'
    })
    .addCase(attemptLogin.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    })
    .addCase(attemptLogin.fulfilled, (state, action) => {
      state.status = 'succeeded'
      state.data = action.payload
    })
  }
})

export const attemptLogin = createAsyncThunk('user/attemptLogin', async ({username, password}) => {
  try {
    return loginApi(username, password)
  } catch(e) {
    console.log(e)
  }
})

export const selectUser = (({user: {data}})=> data)

export const userReducer = userSlice.reducer