import React, {
  useEffect, useReducer, useRef, useState,
} from 'react';
import PropTypes from 'prop-types';

// Animation timing constants
const ANIMATION_TICK_MS = 50; // Tick length in milliseconds
const HOLD_TICKS_AFTER_MESSAGE = 50; // Ticks to wait after message completes

// The address the link always resolves to, whatever the animation shows.
const CONTACT_ADDRESS = 'yue.tong94@gmail.com';
// The domain shown after the animated alias.
const DISPLAY_DOMAIN = 'uritong.com';

const messages = [
  'hi',
  'hello',
  'hola',
  'you-can-email-me-at-literally-anything! Really',
  'well, not anything. But most things',
  'like-this',
  'or-this',
  'but not this :(  ',
  'you.can.also.email.me.with.specific.topics.like',
  'just-saying-hi',
  'lets-collaborate',
  'climbing',
  'help',
  'or-I-really-like-your-website',
  'thanks',
];

const useInterval = (callback, delay) => {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!delay) return () => {};
    const id = setInterval(() => savedCallback.current(), delay);
    return () => clearInterval(id);
  }, [delay]);
};

const usePrefersReducedMotion = () => {
  const query = '(prefers-reduced-motion: reduce)';
  const [reduced, setReduced] = useState(
    () => typeof window !== 'undefined'
      && !!window.matchMedia
      && window.matchMedia(query).matches,
  );

  useEffect(() => {
    if (!window.matchMedia) return () => {};
    const mql = window.matchMedia(query);
    const onChange = () => setReduced(mql.matches);
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, []);

  return reduced;
};

// A message begins already showing its first character, so the prefix is
// never empty mid-animation.
const startOf = (idx) => ({
  idx,
  message: messages[idx].slice(0, 1),
  char: 2,
  isActive: true,
});

const animationReducer = (state, action) => {
  switch (action.type) {
    case 'TICK': {
      if (state.idx >= messages.length) return state;

      const finished = state.char - action.hold >= messages[state.idx].length;
      if (!finished) {
        return {
          ...state,
          message: messages[state.idx].slice(0, state.char),
          char: state.char + 1,
          isActive: true,
        };
      }

      const nextIdx = state.idx + 1;
      if (nextIdx === messages.length) {
        if (action.loopMessage) return startOf(0);
        // Record completion in idx so RESUME doesn't re-arm a finished run.
        return { ...state, idx: messages.length, isActive: false };
      }
      return startOf(nextIdx);
    }
    case 'PAUSE':
      return { ...state, isActive: false };
    case 'RESUME':
      return { ...state, isActive: state.idx < messages.length };
    default:
      return state;
  }
};

const EmailLink = ({ loopMessage }) => {
  const reducedMotion = usePrefersReducedMotion();

  // Opens on the first message, already complete, and holds before cycling.
  const [state, dispatch] = useReducer(animationReducer, {
    idx: 0,
    message: messages[0],
    char: messages[0].length,
    isActive: true,
  });

  useEffect(() => {
    if (reducedMotion) dispatch({ type: 'PAUSE' });
  }, [reducedMotion]);

  useInterval(
    () => dispatch({ type: 'TICK', loopMessage, hold: HOLD_TICKS_AFTER_MESSAGE }),
    state.isActive && !reducedMotion ? ANIMATION_TICK_MS : null,
  );

  const displayMessage = reducedMotion ? messages[0] : state.message;

  const handlePause = () => dispatch({ type: 'PAUSE' });
  const handleResume = () => {
    if (!reducedMotion) dispatch({ type: 'RESUME' });
  };

  return (
    <div
      className="contact-email-container"
      onMouseEnter={handlePause}
      onMouseLeave={handleResume}
    >
      {/* The shown alias is decorative; the link always goes to a real
          address, even while an invalid alias is on screen. */}
      <a
        href={`mailto:${CONTACT_ADDRESS}`}
        className="contact-email-link"
        onFocus={handlePause}
        onBlur={handleResume}
      >
        <span className="sr-only">Email {CONTACT_ADDRESS}</span>
        <span className="contact-email-prefix" aria-hidden="true">
          {displayMessage}
        </span>
        <span className="contact-email-domain" aria-hidden="true">
          @{DISPLAY_DOMAIN}
        </span>
      </a>
    </div>
  );
};

EmailLink.defaultProps = {
  loopMessage: false,
};

EmailLink.propTypes = {
  loopMessage: PropTypes.bool,
};

export default EmailLink;
