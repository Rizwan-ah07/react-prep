import React from "react";
import { Link } from "react-router-dom";

const Page2 = () => {
  return (
    <div>
      <h1>Page 2</h1>
      <p>Dynamic links:</p>
      <ul>
        <li><Link to="/page/1">Go to Page 1 Details</Link></li>
        <li><Link to="/page/2">Go to Page 2 Details</Link></li>
      </ul>
    </div>
  );
};

export default Page2;
