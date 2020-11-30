import React, { useState, useEffect } from 'react'
import Footer from '../features/filters/Footer'
import AddProfile from '../features/profiles/AddProfile'
import VisibleProfileList from '../features/profiles/VisibleProfileList'

import userAPI from '../apis/profileService'


function App () {
  const [profiles, setProfiles] = useState();

  useEffect(() => {
    if (!profiles) {
      getProfiles();
    }
  })

  const getProfiles = async () => {
    let res = await userAPI.getAll();
    console.log(res);
    setProfiles(res);
  }

  const renderProfile = profile => {
    return (
      <li key={profile._id} className="list__item profile">
        <h3 className="profile__name">{profile.name}</h3>
        <p className="profile__email">{profile.email}</p>
      </li>
    );
  };
  
  return (
    <div>
      <ul className="profile__list">
        {( profiles && profiles.length > 0) ? (
          profiles.map(profile => renderProfile(profile))
        ) : (
          <p>No profiles found</p>
        )}
      </ul>
      <p>Add profile?</p>
      <AddProfile />
      <p>'Visible Profile List': </p>
      <VisibleProfileList />
      <p>'Footer': </p>
      <Footer />
    </div>
  );
};

export default App;
