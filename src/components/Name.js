import React from "react";

function Name(props) {
  return (
    <div style={{ padding: "7px 10px", color: "black", ...props.fontSize }}>
      {props.name}
    </div>
  );
}

export default Name;
