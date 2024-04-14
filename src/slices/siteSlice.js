import { createSlice } from '@reduxjs/toolkit'
import { normalizeContactData } from '@/lib/utils'


export const counterSlice = createSlice({
  name: 'site',
  initialState: {
    userId:null,
    normalizedContactData:[],
    sidebarOverlayIsOpen:false,
    personalChat:null
  },
  reducers: {
   setUserId: (state, action) => {
    const id = action.payload
    state.userId = id;
   },
   setNormalizedContactData: (state, action) => {
    state.normalizedContactData = normalizeContactData(action.payload)
   },
   setPersonalChat: (state, action) => {
    const personalChat = action.payload;
    state.personalChat = personalChat
   },
   toggleSidebar: (state) => {
    state.sidebarOverlayIsOpen = !state.sidebarOverlayIsOpen
   }
  },
})

export const { setUserId, setNormalizedContactData,  toggleSidebar, setPersonalChat} = counterSlice.actions

export default counterSlice.reducer