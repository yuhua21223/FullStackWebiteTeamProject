/**
 * Filename: Footer.js
 * Description: This file displays our footer and links.
 */

import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import {
  TiSocialTwitter,
  TiSocialLinkedin,
  TiSocialFacebook,
} from 'react-icons/ti';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer__container">
      <Navbar
        className="footer"
        color=""
        dark
        style={{ height: '300px', background: '#18504c' }}
      >
        <div className="Fcontent">
          <div className="fcontent">
            <section className="left">
              <Link className="footer__link" to="/aboutus">
                About
              </Link>
              <section>
                <Link className="footer__link" to="/privacy">
                  Privacy
                </Link>
              </section>
              <section>
                <Link className="footer__link" to="/contact">
                  Contact Us
                </Link>
              </section>
            </section>
            <section className="center">
              Social
              <section>
                <TiSocialTwitter circle="true" />

                <TiSocialLinkedin />

                <TiSocialFacebook />
              </section>
            </section>
          </div>

          <div className="copyright">
            <Link className="footer__link" to="/">
              <span>Terms of Sale</span>
            </Link>

            <Link className="footer__link" to="/termsofuse">
              <span>Terms of Use</span>
            </Link>

            <Link className="footer__link" to="/">
              <span>© 2021 Copyright iSHARE INC</span>
            </Link>
          </div>
        </div>
        <Button
          variant="success upward__btn"
          onClick={() => scroll.scrollToTop()}
        >
          <Tippy content="Go to top" placement="bottom">
            <ArrowUpwardIcon />
          </Tippy>
        </Button>
      </Navbar>
    </div>
  );
};

export default Footer;
