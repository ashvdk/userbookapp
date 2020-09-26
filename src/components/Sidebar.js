import React, { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar(props) {
  const [selectedItem, setselectedItem] = useState("profile");
  return (
    <div
      className="sidebar"
      style={{
        border: "1px solid",
        width: "22%",
        borderRadius: "20px",
        background: "#3d57c8",
        display: "flex",
        flexDirection: "column",
        color: "#a6a5e4",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "7%",
        marginTop: "3%",
        height: "840px",
      }}
    >
      <div
        style={{
          width: "100%",
        }}
        className="sidebarblock"
      >
        <div
          className="screens"
          onClick={() => setselectedItem("profile")}
          style={
            selectedItem == "profile"
              ? {
                  borderLeft: "4px solid rgb(166, 165, 228)",
                  background: "rgb(89, 86, 229)",
                }
              : { borderLeft: "none", background: "none" }
          }
        >
          <Link
            to="profile"
            style={{
              color: selectedItem == "profile" ? "white" : "rgb(166, 165, 228)",
            }}
          >
            Profile
          </Link>
        </div>
        <div
          className="screens"
          onClick={() => setselectedItem("posts")}
          style={
            selectedItem == "posts"
              ? {
                  borderLeft: "4px solid rgb(166, 165, 228)",
                  background: "rgb(89, 86, 229)",
                }
              : { borderLeft: "none", background: "none" }
          }
        >
          <Link
            to="posts"
            style={{
              color: selectedItem == "posts" ? "white" : "rgb(166, 165, 228)",
            }}
          >
            Posts
          </Link>
        </div>
        <div
          className="screens"
          onClick={() => setselectedItem("gallery")}
          style={
            selectedItem == "gallery"
              ? {
                  borderLeft: "4px solid rgb(166, 165, 228)",
                  background: "rgb(89, 86, 229)",
                }
              : { borderLeft: "none", background: "none" }
          }
        >
          <Link
            to="gallery"
            style={{
              color: selectedItem == "gallery" ? "white" : "rgb(166, 165, 228)",
            }}
          >
            Gallery
          </Link>
        </div>
        <div
          className="screens"
          onClick={() => setselectedItem("todo")}
          style={
            selectedItem == "todo"
              ? {
                  borderLeft: "4px solid rgb(166, 165, 228)",
                  background: "rgb(89, 86, 229)",
                }
              : { borderLeft: "none", background: "none" }
          }
        >
          <Link
            to="todo"
            style={{
              color: selectedItem == "todo" ? "white" : "rgb(166, 165, 228)",
            }}
          >
            ToDo
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
