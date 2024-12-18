import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import Markdown from 'markdown-to-jsx';

const Job = ({
  data: {
    position, institutes, startDate, endDate, summary, highlights,
  },
}) => (
  <article className="jobs-container">
    <header>
      <h4 style={{ marginLeft: '2px' }}>
        <span role="img" aria-label="at">📍</span> {position}
      </h4>
      <p>
        {institutes.map((inst) => (
          <a href={inst.url} key={inst.name}>
            {inst.name}
          </a>
        )).reduce((prev, curr) => [prev, ' | ', curr])}
      </p>
      <p className="daterange">
        {dayjs(startDate).format('MMMM YYYY')} -{' '}
        {endDate ? dayjs(endDate).format('MMMM YYYY') : 'PRESENT'}
      </p>
    </header>
    {summary ? (
      <Markdown
        options={{
          overrides: {
            p: {
              props: {
                className: 'summary',
              },
            },
          },
        }}
      >
        {summary}
      </Markdown>
    ) : null}
    {highlights ? (
      <ul className="points">
        {highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
    ) : null}
  </article>
);

Job.propTypes = {
  data: PropTypes.shape({
    institutes: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      }),
    ).isRequired,
    position: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string,
    summary: PropTypes.string,
    highlights: PropTypes.arrayOf(PropTypes.string.isRequired),
  }).isRequired,
};

export default Job;
