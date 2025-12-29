import React from 'react';
import PropTypes from 'prop-types';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const Cell = ({ data }) => {
  const renderBlockItem = (item) => {
    const label = item.title || item.text;

    if (item.fileName) {
      return (
        <a href={`${PUBLIC_URL}/${item.fileName}`} download>
          {label}
        </a>
      );
    }

    if (item.link) {
      if (item.title && item.text) {
        return (
          <>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
            {`: ${item.text}`}
          </>
        );
      }

      return (
        <a href={item.link} target="_blank" rel="noopener noreferrer">
          {label}
        </a>
      );
    }

    return <span>{label}</span>;
  };

  return (
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
          {data.image ? (
            <div className="image">
              <a href={data.link}>
                <img src={`${PUBLIC_URL}${data.image}`} alt={data.title} />
              </a>
            </div>
          ) : null}
          <div className="description">
            <p className="text">{data.desc}</p>
          </div>
        </div>

        {/* Related publications section */}
        {data.relatedPublications && data.relatedPublications.length > 0 ? (
          <div className="related-publications">
            <h3>Related Publications</h3>
            <ul>
              {data.relatedPublications.map((pub) => (
                <li key={pub.fileName || pub.link || pub.title}>
                  {pub.fileName ? (
                    <a href={`${PUBLIC_URL}/${pub.fileName}`} download>
                      {pub.title}
                    </a>
                  ) : (
                    <a href={pub.link} target="_blank" rel="noopener noreferrer">
                      {pub.title}
                    </a>
                  )}
                  {pub.authors ? `, by ${pub.authors}` : ''}
                  {pub.journal ? `, ${pub.journal}` : ''}
                  {pub.year ? ` (${pub.year})` : ''}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {/* Meetings section */}
        {data.meetings && data.meetings.length > 0 ? (
          <div className="meetings">
            <h3>Meetings</h3>
            <ul>
              {data.meetings.map((meeting) => (
                <li key={meeting.title}>
                  {meeting.title}
                  {', '}
                  <strong>{meeting.type}</strong>
                  {' @ '}
                  {meeting.events.map((event, index) => (
                    <React.Fragment key={event.url || event.name}>
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
        ) : null}

        {/* Blocks section (e.g., climbing disciplines) */}
        {data.blocks && data.blocks.length > 0 ? (
          <div className="blocks">
            {data.blocksTitle ? <h3 className="blocks-title">{data.blocksTitle}</h3> : null}

            {data.blocks.map((block) => (
              <section key={block.title} className="block">
                <header className="block-header">
                  <h3 className="block-title">{block.title}</h3>
                  {block.subtitle ? <h4 className="block-subtitle">{block.subtitle}</h4> : null}
                </header>

                {block.intro ? <p className="block-intro">{block.intro}</p> : null}

                {block.sections && block.sections.length > 0 ? (
                  <div className="block-sections">
                    {block.sections.map((sec) => (
                      <div key={sec.title} className="callout">
                        <h4 className="callout-title">{sec.title}</h4>
                        <ul className="callout-list">
                          {sec.items.map((item) => (
                            <li key={item.id || item.fileName || item.link || item.text}>
                              {renderBlockItem(item)}
                              {item.meta ? <span className="callout-meta">{` — ${item.meta}`}</span> : null}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : null}
              </section>
            ))}
          </div>
        ) : null}
      </article>
    </div>
  );
};

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
        journal: PropTypes.string,
        link: PropTypes.string,
        fileName: PropTypes.string,
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
    blocksTitle: PropTypes.string,
    blocks: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        intro: PropTypes.string,
        subtitle: PropTypes.string,
        sections: PropTypes.arrayOf(
          PropTypes.shape({
            title: PropTypes.string.isRequired,
            items: PropTypes.arrayOf(
              PropTypes.shape({
                id: PropTypes.string,
                title: PropTypes.string,
                text: PropTypes.string,
                meta: PropTypes.string,
                link: PropTypes.string,
                fileName: PropTypes.string,
              }),
            ).isRequired,
          }),
        ),
      }),
    ),
  }).isRequired,
};

export default Cell;
