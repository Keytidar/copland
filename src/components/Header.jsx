import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-bs-theme', newTheme);

    if (newTheme === 'light') {
      document.body.classList.add('dark-text');
      document.body.classList.add('border-black');
    } else {
      document.body.classList.remove('dark-text');
      document.body.classList.remove('border-black');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink to="/home" className="navbar-brand">
          Main
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/nodes" className="nav-link">
                Nodes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/protocol" className="nav-link">
                Protocol
              </NavLink>
            </li>
            <li className="nav-item">
              <div className="form-check form-switch nav-link">
                <input
                  className="form-check-input ms-3"
                  type="checkbox"
                  role="switch"
                  id="switchTheme"
                  onClick={toggleTheme}
                />
                <label className="form-check-label" htmlFor="switchTheme">
                  dark/light
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
