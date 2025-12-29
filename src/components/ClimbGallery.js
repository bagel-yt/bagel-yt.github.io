import React from 'react';
import PropTypes from 'prop-types';

const { PUBLIC_URL } = process.env;

const ClimbGallery = ({ items, speed = 45 }) => {
  const reel = [...items, ...items]; // Duplicate for seamless loop
  const animationDuration = `${speed}s`;

  return (
    <section className="climb-gallery">
      <div className="gallery-mask">
        <div className="gallery-track" style={{ animationDuration }}>
          {reel.map((item, index) => {
            const key = `${item.alt}-${index}`;
            const src = item.src.startsWith('http') ? item.src : `${PUBLIC_URL}${item.src}`;

            return (
              <figure key={key} className="gallery-item">
                <img src={src} alt={item.alt} loading="lazy" />
                {item.caption ? <figcaption>{item.caption}</figcaption> : null}
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
};

ClimbGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      caption: PropTypes.string,
    }),
  ).isRequired,
  speed: PropTypes.number,
};

export default ClimbGallery;
