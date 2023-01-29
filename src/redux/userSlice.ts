import { createSlice } from '@reduxjs/toolkit'

export interface UserState {
  isAuth: boolean,
  firstName: string,
  lastName: string,
  city: string,
  about: string,
  phone: string,
  userImg: string,
  userEmail: string,
  userFullName: string
}

const initialState: UserState = {
  isAuth: false,
  firstName: '',
  lastName: '',
  city: '',
  about: '',
  phone: '',
  userImg: '',
  userEmail: '',
  userFullName: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsAuth: (state, action) => {
      state.isAuth = action.payload
    },
    setFirstName: (state, action) => {
      state.firstName = action.payload
    },
    setLastName: (state, action) => {
      state.lastName = action.payload
    },
    setCity: (state, action) => {
      state.city = action.payload
    },
    setAbout: (state, action) => {
      state.about = action.payload
    },
    setPhone: (state, action) => {
      state.phone =  action.payload
    },
    setUserImg: (state, action) => {
      state.userImg = action.payload
    },
    setUserEmail: (state, action) => {
      state.userEmail = action.payload
    },
    setUserFullName: (state, action) => {
      state.userFullName = action.payload
    },
  },
})

export const { 
  setIsAuth, 
  setAbout, 
  setCity, 
  setFirstName, 
  setLastName, 
  setPhone,
  setUserImg,
  setUserEmail,
  setUserFullName
} = userSlice.actions

export default userSlice.reducer