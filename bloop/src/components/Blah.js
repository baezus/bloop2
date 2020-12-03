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
        <span className="blooper">{nickname} </span>

        <span className="sentBloop">{msg}</span>
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
      <div className="message-header">Bloop Box</div>
      <div className = "bloopBox message-body"> 
        <div className="bloopBin">{this.renderChat()}</div>
        <div className="bloopText">
          <span></span>
          <input
            name="msg"
            onChange={e => this.onTextChange(e)}
            value={this.state.msg}
          />
          <button className="button is-outlined is-rounded" onClick={this.onMessageSubmit}>Bloop</button>
        </div>
      </div>
    </div>
    </div>
   );
  }
}

export default Blah;