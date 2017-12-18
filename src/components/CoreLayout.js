import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const CoreLayout = props => (
  <div className="App">
    <ul>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
    </ul>
    {props.children}
  </div>
);

CoreLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default CoreLayout;
