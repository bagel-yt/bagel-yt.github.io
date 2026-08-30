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
          <a href="mailto:yue.tong94@gmail.com">yue.tong94@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p style={{ textAlign: 'justify', marginBottom: '5px' }}>
        I am a Business Development Manager at Biocytogen, working with
        biotech and pharma R&amp;D teams on humanized and customized mouse
        models (BioMice&trade;) and preclinical pharmacology services.
      </p>
      <p style={{ textAlign: 'justify', marginBottom: '5px' }}>
        I am a PhD-trained biomedical professional and physician. My research
        has spanned translational disease modelling with iPSC-derived
        organoids, genome editing, molecular genetics, and phylogenetics.
      </p>
      <p style={{ textAlign: 'justify', marginBottom: '5px' }}>
        Based in London, GB, I also hold a part-time visiting
        researcher post in cancer evolution at the University of Surrey,
        and maintain an active climbing practice built on preparation,
        risk awareness, and structured progression.
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
