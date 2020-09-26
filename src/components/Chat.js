import React, { useState } from "react";
import ListTheUsers from "./ListTheUsers";
import "./components.css";

function Chat(props) {
  const [moveChatBox, setmoveChatBox] = useState({
    bottom: "-346px",
    open: false,
  });
  return (
    <div
      style={{
        position: "fixed",
        right: "50px",
        width: "235px",
        borderTop: "1px solid #2c65c8",
        borderLeft: "1px solid #2c65c8",
        borderRight: "1px solid #2c65c8",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
        height: "400px",
        ...moveChatBox,
        transition: "bottom 1s",
        background: "white",
      }}
      className="chat"
    >
      <div
        className="chatHead"
        style={{
          padding: "18px 12px",
          background: "#2c65c8",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
          color: "white",
          cursor: "pointer",
        }}
        onClick={() =>
          moveChatBox.open
            ? setmoveChatBox({ ...moveChatBox, bottom: "-346px", open: false })
            : setmoveChatBox({ ...moveChatBox, bottom: "0px", open: true })
        }
      >
        Chats
      </div>
      <ListTheUsers saveUser={props.onClick} chat={"yes"} />
    </div>
  );
}

export default Chat;
