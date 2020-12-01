import React from 'react';
import '../styles/dashboard.scss';

const Dashboard = () => {

  return(
    <section className="section-two">
    <div className="columns">
      <div className="column is-half">
      <div className="card">
      <header className="card-header">
      <p className="card-header-title">
        Profile
        </p>
      </header>
      <div className="card-content">
      <div className="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
      </div>
      </div>
        <footer className="card-footer">
          <a href="#" className="card-footer-item">Save</a>
          <a href="#" className="card-footer-item">Edit</a>
          <a href="#" className="card-footer-item">Delete</a>
        </footer>
      </div>
      </div>

      <div className="column">
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">
              WebSocket(BLAH)
            </p>
          </header>
        <div className="card-content">
          <div className="content">
            Click here to begin the websocket handshake.
          </div>
        </div></div>
      </div>
      
      <div className="column">Bloop</div>
    </div>
    </section>
  );
}

export default Dashboard;