// not in use

import React from 'react';
import PropTypes from 'prop-types';

const Meeting = ({ data }) => (
  <article className="meeting-container">
    <header>
      <h4 className="meeting-title">{data.title}</h4>
      <p className="meeting-details">
        <strong className="meeting-type">{data.type}</strong> @{' '}
        {data.events.map((event, index) => (
          <React.Fragment key={event.url}>
            <a href={event.url} target="_blank" rel="noopener noreferrer">
              {event.name}
            </a>
            {index < data.events.length - 1 ? ', ' : ''}
          </React.Fragment>
        ))}
      </p>
      <p className="meeting-year-location">
        {data.year} <span role="img" aria-label="at">📍</span> {data.location}
      </p>
    </header>
  </article>
);

Meeting.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired, // Type of the meeting (e.g., Talk, Poster)
    events: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired, // Event name
        url: PropTypes.string.isRequired, // Event URL
      }),
    ).isRequired,
    year: PropTypes.string.isRequired, // Year of the meeting
    location: PropTypes.string.isRequired, // Location of the meeting
  }).isRequired,
};

export default Meeting;
