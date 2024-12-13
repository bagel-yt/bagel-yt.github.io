import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
// import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Yue Tong via email @ yue.tong@ulb.be"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2>
            <Link to="/contact">Contact</Link>
          </h2>
        </div>
      </header>
      <div className="email-at">
        <p>Feel free to get in touch. You can email me at: </p>
        <p style={{ marginLeft: '20px' }}><a href="mailto:yue.tong@ulb.be">yue.tong@ulb.be</a></p>
        <p style={{ marginLeft: '20px' }}><a href="mailto:yue.tong94@gmail.com">yue.tong94@gmail.com</a></p>
        {/* Add margin-top to create space */}
        <p style={{ marginTop: '20px' }}>Or send me an actual letter at:</p>
        {/* Apply styles directly in JSX */}
        <p style={{ marginLeft: '20px', fontStyle: 'italic', fontSize: '16px' }}>Center for Diabetes Research, </p>
        <p style={{ marginLeft: '20px', fontStyle: 'italic', fontSize: '16px' }}>ULB Erasme Campus, Building GE, 5th floor, E2 wing</p>
        <p style={{ marginLeft: '20px', fontStyle: 'italic', fontSize: '16px' }}>Route de Lennik 808</p>
        <p style={{ marginLeft: '20px', fontStyle: 'italic', fontSize: '16px' }}>1070 Anderlecht, Belgium</p>
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
