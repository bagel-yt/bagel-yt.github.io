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
        I am an interdisciplinary biomedical researcher with clinical training as a physician.
        My research has focused on unraveling disease mechanisms using organoid-based models,
        genome editing, and integrative molecular approaches.
      </p>
      <p style={{ textAlign: 'justify', marginBottom: '5px' }}>
        I am interested in building a career in translational biomedical research spanning
        molecular genetics, stem cell biology, and disease modeling, drawing on my combined
        laboratory and clinical training, to support target discovery and therapeutic development.
      </p>
      <p style={{ textAlign: 'justify', marginBottom: '5px' }}>
        Currently based in the United Kingdom, I am developing a growing interest in developmental and
        evolutionary perspectives on disease, including phylogenetic approaches to understanding disease
        progression and heterogeneity.
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
