import React, { useState } from "react";

function PeopleToChatWith(props) {
  const [moveChatBox, setmoveChatBox] = useState({
    bottom: "-346px",
    open: false,
  });
  const [messages, setmessages] = useState([
    {
      id: "sjkd-svlha",
      message: "Hi",
    },
    {
      id: "kv-askdjh",
      message: "Hello",
    },
    {
      id: "adkblbal-adkja",
      message: "How are you",
    },
  ]);
  return props.user ? (
    <div
      style={{
        position: "fixed",
        right: "290px",
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
        {props.user.name}
      </div>
      <div className="chatBody">
        {messages.map((msg) => {
          return (
            <div style={{ margin: "17px 5px" }}>
              <span
                style={{
                  background: "#e9f8e9",
                  padding: "6px 13px",
                  borderRadius: "7px",
                }}
              >
                {msg.message}
              </span>
            </div>
          );
        })}
      </div>
      <div
        className="chatFooter"
        style={{
          position: "absolute",
          bottom: "0",
          width: "100%",
          height: "40px",
          borderTop: "1px solid rgb(44, 101, 200)",
        }}
      >
        <div>Send message</div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default PeopleToChatWith;
