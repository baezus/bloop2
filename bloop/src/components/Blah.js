import React from 'react';
import '../styles/blah.scss';
import io from 'socket.io-client';
const socket = io.connect('http://localhost:2737');

class Blah extends React.Component {

  constructor() {
    super();
    this.state = { msg: "", chat: [], nickname: ""};
  }

  componentDidMount() {
    socket.on('chat message', ({ nickname, msg }) => {
      this.setState({
        chat: [...this.state.chat, { nickname, msg }]
      });
    });
  }

  onTextChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onMessageSubmit = () => {
    const { nickname, msg } = this.state;
    socket.emit('chat message', { nickname, msg });
    
    this.setState({ msg: '' });
  };

  renderChat() {
    const { chat } = this.state;
    return chat.map(({ nickname, msg }, idx) => (
      <div key={idx}>
        <div className="sentBlooper">
        <span className="blooper is-size-6">{nickname} </span>

        <span className="sentBloop is-size-6">{msg}</span>
      </div>
      </div>
    ));
  }

  render() {
    
  return (
    <div className="above">
        <div className = "blooperAnnounce block">
          <span>Bloopr</span>
          <input
            name="nickname"
            onChange={e => this.onTextChange(e)}
            value={this.state.nickname}
          />
        </div>
    <div className="message">
      <div className="message-header is-size-4">Bloop Box</div>
      <div className = "bloopBox message-body"> 
        <div className="container">{this.renderChat()}
      
        <div className="field">
          <div className="control">
          <textarea
            className="textarea is-small is-size-6"
            id="bloopinPut"
            rows="1"
            name="msg"
            onChange={e => this.onTextChange(e)}
            value={this.state.msg}
          />
          </div>
          <div className="column is-half">
          <button className="button is-outlined is-rounded is-small is-size-6" onClick={this.onMessageSubmit}>Bloop</button></div>
        </div>
      </div>
      </div>
    </div>
    </div>
   );
  }
}

export default Blah;