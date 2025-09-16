import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="container-sm" style={{maxWidth: "40rem"}}>
      <div className="card mt-5 text-center w-auto">
        <div className="card-header">
          <h2>404 NOT FOUND</h2>
        </div>
        <img
          src="assets/lain404.gif"
          class="img-fluid mx-auto"
          style={{ width: '40rem' }}
        ></img>
        <div className="card-body">
          <h5 className="card-title">NO SIGNAL. NO MEMORY</h5>
          <p className="card-text">
            This address has been forgotten by the network.
          </p>
          <NavLink to={'#/home'} className="btn btn-primary">
            Go home
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
