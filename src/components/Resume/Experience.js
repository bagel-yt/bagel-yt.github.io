import React from 'react';
import PropTypes from 'prop-types';

import Job from './Experience/Job';

const Experience = ({ data }) => (
  <div className="experience">
    <div className="link-to" id="experience" />
    <div className="title">
      <h3>Research & Clinical Experience</h3>
    </div>
    {data.map((job) => (
      <Job
        data={job}
        key={`${job.position}-${job.institutes.map((inst) => inst.name).join(', ')}`}
      />
    ))}
  </div>
);

Experience.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      position: PropTypes.string.isRequired,
      institutes: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired,
        }),
      ).isRequired,
      startDate: PropTypes.string.isRequired,
      endDate: PropTypes.string,
      highlights: PropTypes.arrayOf(PropTypes.string),
      summary: PropTypes.string,
    }),
  ),
};

Experience.defaultProps = {
  data: [],
};

export default Experience;
