import React from 'react';
import PropTypes from 'prop-types';

import Award from './Experience/Award';

const Awards = ({ data }) => (
  <div className="awards">
    <div className="link-to" id="awards" />
    <div className="title">
      <h3>Awards</h3>
    </div>
    {data.map((award) => (
      <Award data={award} key={award.host} />
    ))}
  </div>
);

Awards.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      award: PropTypes.string,
      host: PropTypes.string,
      link: PropTypes.string,
      year: PropTypes.string,
    }),
  ),
};

Awards.defaultProps = {
  data: [],
};

export default Awards;
