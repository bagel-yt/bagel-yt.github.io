import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import ReactGA from 'react-ga';  // Commented out

const Analytics = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') { // Correct reference to NODE_ENV
      // ReactGA.set({
      //   page: pathname,
      // });
      // ReactGA.pageview(pathname);
    }
  }, [pathname]);

  return null;
};

export default Analytics;
