import React from 'react';
import { Link, Redirect } from 'react-router-dom';

function ProfileCard(props) {
  return (
    <li className="profileCard">
      <Link to={`/profiles/${props.profile._id}`} className="profileCardLink">
        <h1>{props.profile.name}</h1>
        <h2>{props.profile.email}</h2>
        <h3>{props.profile.region}</h3>
        <h3>{props.profile.bloop}</h3>
        <h3>{props.profile.bleep}</h3>
      </Link>
      <div className="profileCardButtons">
        <Link
          to={`/profiles/${props.profile._id}/edit`}
          className="profileCardButton"
        >
          Update
        </Link>
        <button
          onClick={() => props.deleteProfile(props.profile._id)}
          className="profileCardButton"
        >
          Delete
        </button>
      </div>
    </li>
  )
}

export default ProfileCard;