import React, { useState } from 'react';
import { connect } from 'react-redux'
import { addProfile } from './redux/profilesSlice'
import axios from 'axios';

const mapDispatch = { addProfile }
const AddProfile = ({ addProfile }) => {
  const [profileName, setProfileName] = useState('')
  const [profilePhoto, setProfilePhoto] = useState('')
  const [emailAddress, setEmailAddress] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [bloop, setBloop] = useState('')
  const [bleep, setBleep] = useState('')

  const onNameChange = e => setProfileName(e.target.value)
  const onPhotoChange = e => setProfilePhoto(e.target.value)
  const onEmailChange = e => setEmailAddress(e.target.value)
  const onZipCodeChange = e => setZipCode(e.target.value)
  const onBloopChange = e => setBloop(e.target.value)
  const onBleepChange = e => setBleep(e.target.value)

  const onSubmit = (e) => {
    e.preventDefault()
    addProfile(profileName, profilePhoto, emailAddress, zipCode, bloop, bleep)
    setProfileName('')
    setProfilePhoto('')
    setEmailAddress('')
    setZipCode('')
    setBloop('')
    setBleep('')
  }

  return (
    <form method="POST" action="http://localhost:2737/users/signup" onSubmit= {onSubmit}>

        <div className="field">
        <label className="label">Name</label>
          <div className="control">
            <input className="input" type="text" name="name" onChange={onNameChange}/>
          </div>
        </div>

          <div className="field">
          <div className="file">
            <label className="file-label">Avatar: 
              <input className="file-input" type="file" name="photo" onChange={onPhotoChange}/>
              <span className="file-cta">
                <span className="file-label">
                  Choose a file
                </span>
              </span>
            </label>
          </div>
          </div>

          <div className="field">
          <div className="control">
            <label className="label">Email</label>
              <input className="input" type="email" name="email" onChange={onEmailChange}/>
          </div>
          </div>

          <div className="field">
            <label className="label">Zip Code</label>
            <div className="control">
              <input className="input" name="zipcode" onChange={onZipCodeChange} onSubmit={setZipCode} type="text"/>
            </div>
          </div>

          <div className="field">
            <label className="label">Bloop</label>
            <div className="control">
              <input className="input" type="text" name="bloop" onSubmit={setBloop} onChange={onBloopChange}/>
            </div>
          </div>

          <div className="field">
            <label className="label">Bleep</label>
            <div className="control">
              <input className="input" type="text" name="bleep" onSubmit={setBleep} onChange={onBleepChange} />
            </div>
          </div>
          
        <div className="field">
            <label className="label">Submit</label>
            <input type="submit" className="button is-link" name="submit"/>
        </div>
    </form>
  )
}

export default connect(
  null,
  mapDispatch
)(AddProfile)

// export default class CreateProfile extends Component {
//   constructor(props) { 
//     super(props)

//     this.onChangeUserName = this.onChangeUserName.bind(this);
//     this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);
    
//     this.state = {
//       name: '',
//       email: ''
//     }
//   };

//   onChangeUserName(e) {
//     this.setState({ name: e.target.value })
//   }

//   onChangeUserEmail(e) {
//     this.setState({ email: e.target.value })
//   }

//   onSubmit(e) {
//     e.preventDefault()
//     const userObject = {
//       name: this.state.name,
//       email: this.state.email
//     };

//     axios.post('http://localhost:2737/users/create', userObject)
//       .then((res) => {
//         console.log(res.data);
//       }).catch((error) => {
//         console.log(error)
//       });

//       this.setState({ name: '', email: ''});    
//   }

//   render() {
//     return (
//       <div className="profileWrap">
//         <form onSubmit={this.onSubmit}>
//           <div className="form-group">
//             <label>Add User Name</label>
//             <input type="text" value={this.state.name} onChange={this.onChangeUserName} className="username_input"/>
//           </div>
//           <div className="form-group">
//             <label>Add User Email</label>
//             <input type="text" value={this.state.email} onChange={this.onChangeUserEmail} className="email_input"/>
//           </div>
//           <div className="form-group">
//             <input type="submit" value="Create!" className="btn"/>
//           </div>
//         </form>
//         <p>hi</p>
//       </div>
//     )
//   }
// }