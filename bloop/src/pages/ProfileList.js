import React from 'react';
import ProfileModel from '../apis/profiles'
import ProfileCard from '../components/ProfileCard';

class ProfileList extends React.Component {
  state = {
    profiles: []
  }

  componentDidMount() {
    //api call
    ProfileModel.all().then((data) => {
      console.log('data: ', data);

      this.setState({ profiles: data.profiles });
    });
  }

  deleteProfile = (id) => {
    ProfileModel.delete(id).then((data) => {
      this.setState((prevState) => {
        const updatedProfiles = prevState.profiles.filter((profile) => profile._id !==id);

        return {profiles: updatedProfiles};
      });
    });
  }

  renderProfiles() {
    console.log(this.state.profiles);
    return this.state.profiles.map((profile) => {
        <ProfileCard
          profile={profile}
          deleteProfile={this.deleteProfile}
        
        />
    });
  }

  render () {
    return (
      <div>
        <ul className="profileCardContainer">
          {this.renderProfiles()}
        </ul>
      </div>
    )
  }
}

export default ProfileList;