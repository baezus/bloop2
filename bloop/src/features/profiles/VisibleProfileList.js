import { connect } from 'react-redux'
import { createSelector } from '@reduxjs/toolkit'
import { toggleProfile } from 'features/profiles/profilesSlice'
import ProfileList from './ProfileList'
import { VisibilityFilters } from 'features/filters/filtersSlice'

const selectProfiles = state => state.profiles
const selectFilter = state => state.visibilityFilter

const selectVisibleProfiles = createSelector(
  [selectProfiles, selectFilter],
  (profiles, filter) => {
    switch (filter) {
      case VisibilityFilters.SHOW_ALL:
        return profiles
      case VisibilityFilters.SHOW_COMPLETED:
        return profiles.filter(p => p.completed)
      case VisibilityFilters.SHOW_ACTIVE:
        return profiles.filter(p => !p.completed)
      default: 
        throw new Error(`Unknown filter: ` + filter)
    }
  }
)

const mapStateToProps = state => ({
  profiles: selectVisibleProfiles(state)
})

const mapDispatchToProps = { toggleProfile }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileList)