import React, { useState } from 'react';
import { connect } from 'react-redux'
import { addProfile } from './redux/profilesSlice'
import axios from 'axios';

const mapDispatch = { addProfile }
const AddProfile = ({ addProfile }) => {
  const [profileName, setProfileName] = useState('')
  const onChange = e => setProfileName(e.target.value)

  return (
    <div className="field"
        onSubmit = {e => {
          e.preventDefault()
          if (!profileName.trim()) {
            return console.log('what? no trim?')
          }
          addProfile(profileName)
          setProfileName('')
        }}
      >
        <label className="label">Name</label>
          <div className="control">
            <input className="input" type="text" value={profileName} onChange={onChange}/>
          </div>

          <div className="file">
            <label className="file-label">
              <input className="file-input" type="file" name="photo"/>
              <span className="file-cta">
                <span className="file-label">
                  Choose a file
                </span>
              </span>
            </label>
          </div>

          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input className="input" type="email" placeholder="Email"/>
            </div>
          </div>

          <div className="field">
            <label className="label">Zip Code</label>
            <div className="control">
              <input className="input" type="text"/>
            </div>
          </div>

          <div className="field">
            <label className="label">Bloop</label>
            <div className="control">
              <input className="input" type="text"/>
            </div>
          </div>

          <div className="field">
            <label className="label">Bleep</label>
            <div className="control">
              <input className="input" type="text"/>
            </div>
          </div>
          
        <div className="field is-grouped">
          <div className="control"></div>
            <button type="submit" className="button is-link">Submit</button>
          </div>
        
    </div>
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