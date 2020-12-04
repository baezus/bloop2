import React from 'react';
import ProfileModel from '../apis/profiles';

class NewProfile extends React.Component {

  state = {
    name: '',
    email: '',
    region: '',
    bloop: '',
    bleep: '',
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

    
    ProfileModel.create(this.state)
      .then((data) => {
        this.props.history.push('/profiles');
      });
  };

  render() {

    console.log('Props: ', this.props);
    return (
      <div>
        <h2>New Profile</h2>
        <form onSubmit={this.handleFormSubmit}>
          <div className="formGroup">
            <label
              className="formGroupLabel"
              htmlFor="Name">Name</label>
          </div>
          <input 
          onChange={this.handleInputChange}
          className="formGroupInput"
          value={this.state.name}
          type="text"
          name="name"
          />
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

          <input type="submit" value="Add New Profile"/>
        </form>
      </div>
    )

  }

}

export default NewProfile;