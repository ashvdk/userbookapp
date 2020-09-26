import React from "react";
import Header from "../components/Header";

function ToDo(props) {
  return (
    <div className="content">
      <Header user={props.user} title="ToDo" />
    </div>
  );
}

export default ToDo;
