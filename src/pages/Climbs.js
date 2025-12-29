import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import Cell from '../components/Projects/Cell';
import data from '../data/climbs';
import ClimbGallery from '../components/ClimbGallery';
import climbGallery from '../data/climbGallery';

const Climbs = () => (
  <Main title="Climbs" description="Learn about Yue Tong's climbing.">
    <article className="post" id="climbs">
      <header>
        <div className="title">
          <h2>
            <Link to="/climbs">Climbing</Link>
          </h2>

          <p>目标是从从容容、游刃有余</p>

          <p className="tagline">
            I aim to train as a climbing instructor. For this purpose, I am an
            active member of the{' '}
            <a
              href="https://www.thebmc.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              British Mountaineering Council
            </a>{' '}
            and a{' '}
            <a
              href="https://www.mountain-training.org/about/mountain-training-association"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mountain Training Association
            </a>{' '}
            trainee. My short-term goal is to qualify as a{' '}
            <a
              href="https://www.mountain-training.org/qualifications/climbing/climbing-wall-instructor"
              target="_blank"
              rel="noopener noreferrer"
            >
              Climbing Wall Instructor (CWI)
            </a>{' '}
            by 2026, followed by{' '}
            <a
              href="https://www.mountain-training.org/qualifications/climbing/rock-climbing-instructor/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rock Climbing Instructor (RCI)
            </a>{' '}
            certification by 2030.
          </p>
        </div>
      </header>

      <ClimbGallery items={climbGallery} speed={66} />

      {data.map((climb) => (
        <Cell data={climb} key={climb.title} />
      ))}
    </article>
  </Main>
);

export default Climbs;
