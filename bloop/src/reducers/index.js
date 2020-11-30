import { combineReducers } from 'redux'
import profilesReducer from '../features/profiles/profilesSlice'
import visibilityFilterReducer from '../features/filters/filtersSlice'

export default combineReducers({
  profiles: profilesReducer,
  visibilityFilter: visibilityFilterReducer
});