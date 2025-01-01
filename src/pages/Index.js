import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const Index = () => (
  <Main
    description={
      "Yue Tong's personal website. Brussels based research scientist, "
      + 'previous physician.'
    }
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">Welcome 您好</Link>
          </h2>
          <p style={{ fontSize: '0.9em' }}>
            Thank you for your interest
          </p>
        </div>
      </header>
      <p style={{ fontSize: '1.1em' }}>
        {' '}
        Please feel free to click around and read more
        {' '}<Link to="/about" style={{ fontWeight: 'bold' }}>about me</Link>,
        or you can check out my{' '}<Link to="/resume" style={{ fontWeight: 'bold' }}>resume</Link>,
        download my <a href={`${PUBLIC_URL}/docs/yuetong_cv.pdf`} download="yuetong_cv.pdf" style={{ fontWeight: 'bold' }}>CV</a>,
        read about my{' '}<Link to="/projects" style={{ fontWeight: 'bold' }}> research</Link>,
        view {' '}<Link to="/stats" style={{ fontWeight: 'bold' }}>site statistics</Link>, or{' '}
        <Link to="/contact" style={{ fontWeight: 'bold' }}>contact me</Link>.
      </p>
    </article>
  </Main>
);

export default Index;
