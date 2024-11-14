/* eslint-disable react/prop-types */
import React from "react";

const NotFound = ({ slug = "kuch nhi aya" }) => {
  return (
    <div>
      <h1>Hello {slug}</h1>
    </div>
  );
};

export default NotFound;
