import { createSlice } from '@reduxjs/toolkit'

let nextProfileId = 0

const profilesSlice = createSlice({
  name: 'profiles',
  initialState: [],
  reducers: {
    addProfile: {
      reducer(state, action) {
        const { id, name } = action.payload
        state.push({ id, name, completed: false })
      },
      prepare(name) {
        return { payload: { name, id: nextProfileId++ } }
      }
    },
    toggleProfile(state, action) {
      const profile = state.find(profile => profile.id === action.payload)
      if (profile) {
        profile.completed = !profile.completed
      }
    } 
  }
})

export const { addProfile, toggleProfile } = profilesSlice.actions

export default profilesSlice.reducer