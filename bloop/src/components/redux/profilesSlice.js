import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

let nextProfileId = 0

const profilesSlice = createSlice({
  name: 'profiles',
  initialState: [],
  reducers: {
    addProfile: {
      reducer(state, action) {
        const { id, name, bloop } = action.payload
        state.push({ id, name, bloop, completed: false })
        axios.post('http://localhost:3000/users/signup', action.payload)
        .then((res) => {
          console.log(res.data);
        }).catch((error) => {
          console.log(error)
        });
      },
      prepare(name) {
        return { payload: { name, id: nextProfileId++ }}
      }
    },
  }
});

export const { addProfile } = profilesSlice.actions
export default profilesSlice.reducer