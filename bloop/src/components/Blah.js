import React from 'react';
import '../styles/blah.scss';

const Blah = () => {
  return (
    <div className='blah-blah'>
      <ul id="messages">
      </ul>
      <form action="">
        <input id="m" autoComplete="off" /><button>Send</button>
      </form>
    </div>
  );
}

export default Blah;