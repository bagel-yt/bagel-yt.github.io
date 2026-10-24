import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Yue Tong via email at hi@uritong.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2>
            <Link to="/contact">Get in Touch</Link>
          </h2>
        </div>
      </header>
      <div className="contact-content">
        <div className="contact-email-block">
          <EmailLink />
          <p className="contact-hint">Usually respond within 24 hours</p>
        </div>

        <div className="contact-divider">
          <span>or find me on</span>
        </div>

        <ContactIcons />
      </div>
    </article>
  </Main>
);

export default Contact;
