import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users:[],
  sidebarStatus: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users = state.users.concat(action.payload);
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter(user => user.email !== action.payload)
    },
    editUser: (state, action) => {
      state.users = state.users.map(user => {
        if (user.email == action.payload.email) {
          user.permissions = action.payload.permissions;
        }
        return user;
      })
    },
    setUsers: (state, action) => {
      state.users = action.payload
    },
    setSidebarStatus: (state, action) => {
      state.sidebarStatus = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { addUser, deleteUser, editUser, setUsers, setSidebarStatus } = userSlice.actions

export default userSlice.reducer