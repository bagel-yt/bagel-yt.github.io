import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import Markdown from 'markdown-to-jsx';

const Job = ({
  data: {
    position, institute, url, startDate, endDate, summary, highlights,
  },
}) => (
  <article className="jobs-container">
    <header>
      <h4 style={{ marginLeft: '2px' }}>
        <a href={url}> <span role="img" aria-label="at">📍</span> {institute} - {position} </a>
      </h4>
      <p className="daterange">
        {' '}
        {dayjs(startDate)
          .format('MMMM YYYY')} -{' '}
        {endDate ? dayjs(endDate)
          .format('MMMM YYYY') : 'PRESENT'}
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
    institute: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string,
    summary: PropTypes.string,
    highlights: PropTypes.arrayOf(PropTypes.string.isRequired),
  }).isRequired,
};

export default Job;
