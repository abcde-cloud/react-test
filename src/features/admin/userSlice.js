import { createSlice } from '@reduxjs/toolkit'

// const initialState = [
//   {
//     name: 'User',
//     email: 'example@email.com',
//     pemissions: [
//       'full stack'
//     ],
//     image: ''
//   }
// ]


const initialState = {
  value: 0,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    }
  },
})

// Action creators are generated for each case reducer function
export const { addUser } = userSlice.actions

export default userSlice.reducer