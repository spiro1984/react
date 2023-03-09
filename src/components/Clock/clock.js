import React, { useState, useEffect } from "react";
const Clock = (props) => {
  const [date, setdate] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => setdate(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <h1>Hello {props.name}</h1>
      <p>It is {date.toLocaleTimeString()}</p>
    </>
  );
};
export default Clock;
