import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const Index = () => (
  <Main
    description={
      "Yue Tong's personal website. London-based scientist and trained physician, "
      + 'working in biopharma business development.'
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
        I am a Business Development Manager at{' '}
        <a href="https://biocytogen.com" style={{ fontWeight: 'bold' }}>Biocytogen</a>,
        working at the interface of preclinical science and commercial partnerships,
        and I also hold a part-time visiting researcher post in cancer evolution at
        the University of Surrey.
      </p>
      <p style={{ fontSize: '1.1em' }}>
        {' '}
        Please feel free to click around and read more
        {' '}<Link to="/about" style={{ fontWeight: 'bold' }}>about me </Link>,
        {' '}<Link to="/resume" style={{ fontWeight: 'bold' }}>my resume </Link> ,and
        {' '}<Link to="/projects" style={{ fontWeight: 'bold' }}>my research</Link> in an interactive way,
        or if you prefer, you can download my <a href={`${PUBLIC_URL}/yuetong_cv.pdf`} download="yuetong_cv.pdf" style={{ fontWeight: 'bold' }}>research CV </a>
        or <a href={`${PUBLIC_URL}/yuetong_cv_in.pdf`} download="yuetong_cv_in.pdf" style={{ fontWeight: 'bold' }}>professional CV</a>,
        view {' '}<Link to="/stats" style={{ fontWeight: 'bold' }}>site statistics</Link>, or{' '}
        <Link to="/contact" style={{ fontWeight: 'bold' }}>contact me</Link>.
      </p>
    </article>
  </Main>
);

export default Index;
