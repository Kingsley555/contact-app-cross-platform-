import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header  className="header">
    <div className="content-container">
    <div className="header__content">
    <h1 >Contact</h1>
    </div>
    <NavLink className="header__title" to="/" activeClassName="is-active" exact={true}>
      Dashboard
    </NavLink> || 
    <NavLink className="header__title"  to="/create" activeClassName="is-active">
      Add Contact
    </NavLink>
    
    
    </div>
   
  </header>
);

export default Header;
