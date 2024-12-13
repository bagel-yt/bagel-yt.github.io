import React from 'react';
import PropTypes from 'prop-types';

const Award = ({ data }) => (
  <article className="award-container">
    <header>
      <h4 className="award">{data.award}</h4>
      <p className="organization">
        <a href={data.link}>{data.host}</a>, {data.year}
      </p>
    </header>
  </article>
);

Award.propTypes = {
  data: PropTypes.shape({
    award: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    host: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
  }).isRequired,
};

export default Award;
