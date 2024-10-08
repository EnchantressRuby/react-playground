import { createSlice } from "@reduxjs/toolkit"

const permissionSlice = createSlice({
  name: "permissionSlice",

  initialState: {
    email: "",
    password: "",
  },

  reducers: {
    createUser: (state, action) => {
      state.email = action.payload.email
      state.password = action.payload.password
    },

    deleteUser: (state) => {
      state.email = ""
      state.password = ""
    },
  }
})

export const { createUser, deleteUser } = permissionSlice.actions

export default permissionSlice.reducer