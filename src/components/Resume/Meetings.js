// not in use

import React from 'react';
import PropTypes from 'prop-types';
import Meeting from './Experience/Meeting';

const Meetings = ({ data }) => (
  <div className="meetings">
    <div className="link-to" id="meetings" />
    <div className="title">
      <h3>Meetings</h3>
    </div>
    {data.map((item) => (
      <Meeting key={`${item.type}-${item.title}`} data={item} />
    ))}
  </div>
);

Meetings.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired, // "Talk" or "Poster"
      events: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired, // Event name
          url: PropTypes.string.isRequired, // Event URL
        }),
      ).isRequired,
      year: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired, // Event location
    }),
  ),
};

Meetings.defaultProps = {
  data: [],
};

export default Meetings;
