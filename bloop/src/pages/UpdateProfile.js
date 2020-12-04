import React from 'react';
import ProfileModel from '../apis/profiles';

class UpdateProfile extends React.Component {

  state = {
    name: '',
    email: '',
    region: '',
    bloop: '',
    bleep: '',
  };

  componentDidMount() {
    const profileId = this.props.match.params.id;
    ProfileModel.getOne(profileId)
      .then((data) => {
        this.setState({
          name: data.profile.name,
          email: data.profile.region,
          region: data.profile.region,
          bloop: data.profile.bloop,
          bleep: data.profile.bleep,
          completed: data.profile.completed
        });
      });
  };
  
  handleInputChange = (event) => {
    if (event.target.name === 'completed') {
      this.setState((prevState) => {
        return { completed: !prevState.completed };
      });
    } else {
      this.setState({ [event.target.name]: event.target.value });
    }
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    const profileId = this.props.match.params.id;
    
    ProfileModel.update(profileId, this.state)
      .then((data) => {
        console.log('updatedProfile:', data);

        this.props.history.push(`/profiles/${profileId}`);
      });
  };

  render() {
  console.log(this.props);

  return (
    <div>
      <h2>Update Profile</h2>
      <form onSubmit={this.handleFormSubmit}>
        <div className="formGroup">
          <label 
            className="formGroupLabel"
            htmlFor="title">Name</label>
          <input 
            onChange={this.handleInputChange}
            className="formGroupInput"
            value={this.state.name}
            type="text" 
            name="name" 
          />
        </div>
        <div className="formGroup">
          <label
            className="formGroupLabel" 
            htmlFor="email"
          >
            Email
          </label>
          <input 
            onChange={this.handleInputChange}
            className="formGroupInput"
            value={this.state.email}
            type="text" 
            name="email" 
          />
        </div>
        <div className="formGroup">
          <label
            className="formGroupLabel" 
            htmlFor="region"
          >
            Region
          </label>
          <input 
            onChange={this.handleInputChange}
            className="formGroupInput"
            value={this.state.region}
            type="text" 
            name="region"
          />
        </div>
        <div className="formGroup">
          <label
            className="formGroupLabel" 
            htmlFor="bloop"
          >
            Bloop
          </label>
          <input 
            onChange={this.handleInputChange}
            className="formGroupInput"
            value={this.state.bloop}
            type="text" 
            name="bloop"
          />
        </div>
        <div className="formGroup">
          <label
            className="formGroupLabel" 
            htmlFor="bleep"
          >
            Bleep
          </label>
          <input 
            onChange={this.handleInputChange}
            className="formGroupInput"
            value={this.state.bleep}
            type="text" 
            name="bleep"
          />
        </div>
        <div className="formGroup">
          <label
            className="formGroupLabel" 
            htmlFor="completed"
          >
            Completed
          </label>
          <input 
            onChange={this.handleInputChange}
            className="formGroupInput"
            value={this.state.completed}
            type="checkbox" 
            id="completed" 
            name="completed"
          />
        </div>

        <input type="submit" value="Update Profile"/>
      </form>
    </div>
  );
}}

export default UpdateProfile;