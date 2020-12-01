import React from 'react'
import PropTypes from 'prop-types'

const Profile = ({ onClick, completed, name, photo, email, zipcode, bloop, bleep }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none' }}
    >
      {name, photo, email, zipcode, bloop, bleep}
    </li>
)

Profile.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  zipcode: PropTypes.string.isRequired,
  bloop: PropTypes.string.isRequired,
  bleep: PropTypes.string.isRequired
}

export default Profile;