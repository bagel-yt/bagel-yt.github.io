import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Yue (Uri) Tong 童越</h2>
        <p>
          <a href="mailto:hi@uritong.com">hi@uritong.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p style={{ textAlign: 'justify', marginBottom: '5px' }}>
        <strong>Life science professional.</strong> Based in London, I work
        with biotech and pharma R&amp;D teams to turn scientific goals into
        well-scoped preclinical collaborations.
      </p>
      <p style={{ textAlign: 'justify', marginBottom: '5px' }}>
        <strong>PhD-trained physician.</strong> My research has spanned
        translational disease modelling with iPSC-derived organoids, molecular
        genetics, and phylogenetics, and continues part-time in cancer
        evolution.
      </p>
      <p style={{ textAlign: 'justify', marginBottom: '5px' }}>
        <strong>Climber.</strong> A qualified Climbing Wall Instructor, with a
        practice built on preparation, risk awareness, and structured
        progression.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Yue Tong <Link to="/">uritong.com</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
