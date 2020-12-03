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
        <span style={{ color: 'green' }}>{nickname} </span>

        <span>{msg}</span>
      </div>
    ));
  }

  render() {
    
  return (
      <div>
        <span>Nickname</span>
        <input
          name="nickname"
          onChange={e => this.onTextChange(e)}
          value={this.state.nickname}
        />
        <span>Message</span>
        <input
          name="msg"
          onChange={e => this.onTextChange(e)}
          value={this.state.msg}
        />
        <button className="button is-outlined is-rounded" onClick={this.onMessageSubmit}>Blah</button>
        <div>{this.renderChat()}</div>
      </div>
    );
  }
}

export default Blah;