import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

let nextProfileId = 0

const profilesSlice = createSlice({
  name: 'profiles',
  initialState: [],
  reducers: {
    addProfile: {
      reducer(state, action) {
        const { id, name, photo, email, zipcode, bloop, bleep } = action.payload
        state.push({ id, name, photo, email, zipcode, bloop, bleep, completed: false })
        axios.post('http://localhost:2737/users/signup', action.payload)
        .then((res) => {
          console.log(res.data);
          axios.get('/');
        }).catch((error) => {
          console.log(error)
        });
      },
      prepare(name, photo, email, zipcode, bloop, bleep) {
        return { payload: { name, photo, email, zipcode, bloop, bleep, id: nextProfileId++ }}
      }
    },
  }
});

export const { addProfile } = profilesSlice.actions
export default profilesSlice.reducer