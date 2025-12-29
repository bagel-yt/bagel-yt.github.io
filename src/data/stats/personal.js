import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1994-08-06T00:00:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'places',
    label: 'Places that I like',
    value: 55,
    link: 'https://www.google.com/maps/d/viewer?mid=18OHKpNHWAuM57ePKnr-fNluQiGBt1h4&usp=sharing',
  },
  {
    key: 'climbs',
    label: 'climbing gyms that I like',
    value: 16,
    link: 'https://www.google.com/maps/d/viewer?mid=1B-ag8lqemSBdTcMKb4oNd4mNDXidf2o&usp=sharing',
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'London, United Kingdom',
  },
];

export default data;
