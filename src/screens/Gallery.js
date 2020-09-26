import React from "react";
import Header from "../components/Header";

function Gallery(props) {
  return (
    <div className="content">
      <Header user={props.user} title="Gallery" />
    </div>
  );
}

export default Gallery;
