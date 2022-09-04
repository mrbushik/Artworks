import React from 'react';
import { Home, Notifications, Settings, Arrow, Logo } from '../../icons';
import './header.scss';
import Userpic from '../../img/peopleAvatars/Userpic.png';
import ArtWork1st from '../../img/picture/Artwork1st.png';

function Header() {
  return (
    <header>
      <div className="container">
        <div className="header-wraper">
          <nav>
            <Logo color={'black'} />
          </nav>
          <nav className="header-settings">
            <Home />
            <Notifications />
            <Settings />
            <img className="header-avatar" src={Userpic} alt="your avatar" />
            <div className="header-language__toggle">
              <h4>ENG</h4>
              <Arrow />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
