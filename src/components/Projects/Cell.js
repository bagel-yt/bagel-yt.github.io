import React from 'react';
import PropTypes from 'prop-types';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage
// import dayjs from 'dayjs';

const Cell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      {/* Full-width header */}
      <header className="full-header">
        <h3 className="title">
          <a href={data.link}>{data.title}</a>
        </h3>
        <h4 className="subtitle">{data.subtitle || ''}</h4>
        <p className="authors">{data.authors || ''}</p>
      </header>

      {/* Two-column layout for image and description */}
      <div className={`content ${!data.image ? 'no-image' : ''}`}>
        {data.image && (
          <div className="image">
            <a href={data.link}>
              <img src={`${PUBLIC_URL}${data.image}`} alt={data.title} />
            </a>
          </div>
        )}
        <div className="description">
          <p className="text">{data.desc}</p>
        </div>
      </div>

      {/* Related publications section */}
      {data.relatedPublications && data.relatedPublications.length > 0 && (
        <div className="related-publications">
          <h3>Related Publications</h3>
          <ul>
            {data.relatedPublications.map((pub) => (
              <li key={pub.fileName || pub.link}>
                {pub.fileName ? (
                  // Download link
                  <a href={`${PUBLIC_URL}/${pub.fileName}`} download>
                    {pub.title}
                  </a>
                ) : (
                  // Website link
                  <a href={pub.link} target="_blank" rel="noopener noreferrer">
                    {pub.title}
                  </a>
                )}
                {pub.authors && `, by ${pub.authors}`}
                {pub.journal && `, ${pub.journal}`}
                {pub.year && ` (${pub.year})`}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Meetings section */}
      {data.meetings && data.meetings.length > 0 && (
        <div className="meetings">
          <h3>Meetings</h3>
          <ul>
            {data.meetings.map((meeting) => (
              <li key={meeting.title}>
                {meeting.title}
                {' , '}
                <strong>{meeting.type}</strong>
                {' @ '}
                {meeting.events.map((event, index) => (
                  <React.Fragment key={event.url}>
                    <a href={event.url} target="_blank" rel="noopener noreferrer">
                      {event.name}
                    </a>
                    {index < meeting.events.length - 1 ? ', ' : ''}
                  </React.Fragment>
                ))}
                {`, ${meeting.year} 📍 ${meeting.location}`}
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    authors: PropTypes.string,
    link: PropTypes.string,
    image: PropTypes.string,
    desc: PropTypes.string.isRequired,
    relatedPublications: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        authors: PropTypes.string,
        year: PropTypes.number,
        journal: PropTypes.string, // Journal name
        link: PropTypes.string, // Website link
        fileName: PropTypes.string, // File name for download
      }),
    ),
    meetings: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        events: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
          }),
        ).isRequired,
        year: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
      }),
    ),
  }).isRequired,
};

export default Cell;
