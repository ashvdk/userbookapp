import React, { useState, useEffect } from "react";
import ListTheUsers from "../components/ListTheUsers";

function AllUsers(props) {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="usercard">
        <div className="head">
          <div
            style={{
              color: "#5e5c5c",
              fontSize: "17px",
            }}
          >
            Select an account
          </div>
        </div>
        <ListTheUsers saveUser={props.saveUser} chat={"no"} />
      </div>
    </div>
  );
}

export default AllUsers;
