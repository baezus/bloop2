import React from 'react'
import PropTypes from 'prop-types'
import Profile from './Profile'

const ProfileList = ({ profiles, toggleProfile }) => (
  <ul>
    {profiles.map(profile => (
      <Profile key={profile.id} {...profile} onClick={() => toggleProfile(profile.id)} />
    ))}
  </ul>
)

ProfileList.propTypes = {
  profiles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleProfile: PropTypes.func.isRequired
}

export default ProfileList