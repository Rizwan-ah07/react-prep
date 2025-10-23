import React from "react";
import { useParams } from "react-router-dom";

const PageDetail = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Character Detail</h1>
      <p>You selected: {id}</p>
    </div>
  );
};

export default PageDetail;
