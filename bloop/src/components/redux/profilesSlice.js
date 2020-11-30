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
        return { payload: { name, id: nextProfileId++ }}
      }
    },
  }
});

export const { addProfile } = profilesSlice.actions
export default profilesSlice.reducer