import { createSlice } from "@reduxjs/toolkit"

const permissionSlice = createSlice({
  name: "permissionSlice",

  initialState: {
    email: "",
    password: "",
  },

  reducers: {
    createUser: () => {

    },

    deleteUser: () => {

    },
  }
})

export const { createUser, deleteUser } = permissionSlice.actions

export default permissionSlice.reducer