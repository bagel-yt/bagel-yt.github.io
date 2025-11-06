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
          <a href="mailto:yue.tong@ulb.be">yue.tong@ulb.be</a>
        </p>
        <p>
          <a href="mailto:yue.tong94@gmail.com">yue.tong94@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p style={{ textAlign: 'justify', marginBottom: '5px' }}>
        I am stem cell biologist completed my PhD in
        {' '}
        <a href="https://www.ucdr.be/">ULB Center for Diabetes Research</a> as a FRIA doctoral fellow
        of
        {' '}
        <a href="https://www.frs-fnrs.be/en/">F.R.S.-FNRS</a>.
        My research focused on unraveling
        disease mechanisms with organoid technology, genome editing and multi-omics approaches.
      </p>
      <p style={{ textAlign: 'justify', marginBottom: '5px' }}>
        Currently, I am seeking to develop a career in multidisciplinary biomedical research —
        spanning molecular genetics, stem cell biology,
        translational studies and product development — leveraging my extensive laboratory and
        clinical background.
      </p>
      <p style={{ textAlign: 'justify', marginBottom: '5px' }}>
        I am currently developing strong interests toward developmental biology and a phylogenetic
        understanding of disease development, hoping to generate some evolutionary insights.
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
