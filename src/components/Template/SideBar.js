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
        <h2>Yue Tong 童 越</h2>
        <p>
          <a href="mailto:yue.tong94@gmail.com">yue.tong94@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p style={{ textAlign: 'justify', marginBottom: '5px' }}>
        I am a PhD-trained biomedical scientist. My work has focused on
        translational disease modelling using stem cell–derived organoids,
        genome editing, and integrative molecular analyses.
      </p>
      <p style={{ textAlign: 'justify', marginBottom: '5px' }}>
        I am interested in building a career in pharmaceutical,
        biotechnology, or CRO environments, drawing on my background
        in experimental disease modelling, data analysis,
        and cross-functional project coordination to support target
        discovery and therapeutic development.
      </p>
      <p style={{ textAlign: 'justify', marginBottom: '5px' }}>
        Currently based in the United Kingdom, I combine data-driven
        research with broader interests in evolutionary perspectives
        on disease, and maintain an active climbing practice that
        emphasizes preparation, risk awareness, and structured progression.
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
        &copy; Yue Tong <Link to="/">bagel-yt@github.io</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
