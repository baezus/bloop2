import React, { useState } from 'react';
// import { connect } from 'react-redux'
// import { addProfile } from './profilesSlice'
import axios from 'axios';

// const mapDispatch = { addProfile }
// const AddProfile = ({ })

export default class CreateProfile extends Component {
  constructor(props) { 
    super(props)

    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    
    this.state = {
      name: '',
      email: ''
    }
  };

  onChangeUserName(e) {
    this.setState({ name: e.target.value })
  }

  onChangeUserEmail(e) {
    this.setState({ email: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()
    const userObject = {
      name: this.state.name,
      email: this.state.email
    };

    axios.post('http://localhost:2737/users/create', userObject)
      .then((res) => {
        console.log(res.data);
      }).catch((error) => {
        console.log(error)
      });

      this.setState({ name: '', email: ''});    
  }

  render() {
    return (
      <div className="profileWrap">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Add User Name</label>
            <input type="text" value={this.state.name} onChange={this.onChangeUserName} className="username_input"/>
          </div>
          <div className="form-group">
            <label>Add User Email</label>
            <input type="text" value={this.state.email} onChange={this.onChangeUserEmail} className="email_input"/>
          </div>
          <div className="form-group">
            <input type="submit" value="Create!" className="btn"/>
          </div>
        </form>
        <p>hi</p>
      </div>
    )
  }
}