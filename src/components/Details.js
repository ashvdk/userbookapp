import React from "react";

function Details(props) {
  return (
    <div className="profiledetails">
      <div className="title">{props.title}</div>
      <div className="separator"> : </div>
      <div className="value">{props.value}</div>
    </div>
  );
}

export default Details;
