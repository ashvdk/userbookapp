import React from "react";
import Header from "../components/Header";

function Posts(props) {
  console.log(props);
  return (
    <div className="content">
      <Header user={props.user} title="Posts" />
    </div>
  );
}

export default Posts;
