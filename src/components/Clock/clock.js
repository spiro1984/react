import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Clock = ({ name, customInterval }) => {
  const [date, setdate] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => setdate(new Date()), customInterval);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <h1>Hello {name}</h1>
      <p>It is {date.toLocaleTimeString()}</p>
    </>
  );
};

Clock.propTypes = {
  name: PropTypes.string,
  customInterval: PropTypes.number,
};

export default Clock;
