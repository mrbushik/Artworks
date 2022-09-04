/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Facebook, Instagram, Logo, WhatsApp } from '../../icons';
import './footer.scss';
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <ul className="footer-container">
          <li>
            <div className="footer-logo__wraper">
              <Logo color={'white'} />
            </div>
            <a href="#">Contract offer</a>
            <a href="#">Card payment rules</a>
          </li>
          <li>
            <div className="footer-email__container">
              <a href="http://imagine.com">imagine.com</a>
              <a href="mailto: info@imagine.com">info@imagine.com</a>
              <p>© IMAGINE 2021. All rights Reserved</p>
            </div>
            <div className="footer-sotial__container">
              <a className="footer-sotial__link" href="#">
                <Facebook />
              </a>
              <a className="footer-sotial__link" href="#">
                <Instagram />
              </a>
              <a className="footer-sotial__link" href="#">
                <WhatsApp />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
