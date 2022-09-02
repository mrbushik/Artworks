import React from 'react';
import { Home, Notifications, Settings, Arrow, Logo } from '../../icons';
import './header.scss';
import Userpic from '../../img/peopleAvatars/Userpic.png';

function Header() {
  return (
    <header>
      <div className="container">
        <div className="header-wraper">
          <nav>
            <Logo />
          </nav>
          <nav className="header-settings">
            <Home />
            <Notifications />
            <Settings />
            <img src={Userpic} alt="your avatar" />
            <Arrow />
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
