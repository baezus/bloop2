import React from 'react';
import ProfileModel from '../apis/profiles';
import ProfileCard from '../components/ProfileCard';

class ProfileShow extends React.Component {

  state = {
    profile: {}
  }

  componentDidMount() {
    const profileId = this.props.match.params.id;

    ProfileModel.getOne(profileId)
      .then((data) => {
        this.setState({ profile: data.profile });
    });
  }

  render () { 
    return (
      <div>
        <h1>One Profile</h1>
        <div className="profileCardContainer">
          <ProfileCard profile={this.state.profile}/>
        </div>
      </div>
    )
  }
}

export default ProfileShow;