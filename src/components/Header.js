import React from "react";
import Image from "./Image";
import Name from "./Name";

function Header(props) {
  const { user } = props;
  if (user) {
    return (
      <div
        style={{
          display: "flex",
          borderBottom: "1px solid #c5c4c4",
          paddingBottom: "15px",
        }}
      >
        <div style={{ fontSize: "23px", color: "#545454" }}>{props.title}</div>
        <div
          style={{
            marginLeft: "auto",
            display: "flex",
          }}
        >
          <Image
            src={user.profilepicture}
            style={{ width: "40px", borderRadius: "50%", height: "40px" }}
          />
          <Name name={user.name} fontSize={{ fontSize: "20px" }} />
        </div>
      </div>
    );
  } else {
    return <div>Loading....</div>;
  }
}

export default Header;
