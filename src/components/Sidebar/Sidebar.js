import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.scss';

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/about">
        About
      </a>
      <a className="menu-item" href="/activities">
        Activites
      </a>
      <a className="menu-item" href="/settings">
        Settings
      </a>
      <a className="menu-item" href="/logout">
        Logout
      </a>
    </Menu>
  );
};