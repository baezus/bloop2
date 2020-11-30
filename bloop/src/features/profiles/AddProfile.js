import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addProfile } from './profilesSlice'

const mapDispatch = { addProfile }

const AddProfile = ({ addProfile }) => {
  const [profileName, setProfileName] = useState('')
  const onChange = e => setProfileName(e.target.value)

  return (
    <div>
      <form
        onSubmit ={e => {
          e.preventDefault()
          if (!profileName.trim()) {
            return
          }
          addProfile(profileName)
          setProfileName('')
        }}
      >
        <input value={profileName} onChange={onChange} />
        <button type="submit">Add Profile</button>
      </form>
    </div>
  )
}

export default connect(
  null,
  mapDispatch
)(AddProfile)