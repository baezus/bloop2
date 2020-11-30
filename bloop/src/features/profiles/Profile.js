import React from 'react'
import PropTypes from 'prop-types'

const Profile = ({ onClick, completed, name }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
    >
      {name}
    </li>
)

Profile.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired
}

export default Profile