import { combineReducers } from 'redux'
import profilesReducer from '../profilesSlice'

export default combineReducers({
  profiles: profilesReducer,
});