import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import Image from "./Image";
import Name from "./Name";

function ListTheUsers(props) {
  const [allUsers, setAllUsers] = useState([]);
  const getAllUsers = async () => {
    const response = await Axios.get("https://panorbit.in/api/users.json");
    setAllUsers([...response.data.users]);
  };
  const showAllUsers = () => {
    return allUsers.map((user) =>
      props.chat == "no" ? (
        <Link key={user.id} to="profile" onClick={() => props.saveUser(user)}>
          <div className="user">
            <Image
              src={user.profilepicture}
              style={{ width: "30px", borderRadius: "50%", height: "30px" }}
            />
            <Name name={user.name} fontSize={{ fontSize: "14px" }} />
          </div>
        </Link>
      ) : (
        <div className="user" onClick={() => props.saveUser(user)}>
          <Image
            src={user.profilepicture}
            style={{ width: "30px", borderRadius: "50%", height: "30px" }}
          />
          <Name name={user.name} fontSize={{ fontSize: "14px" }} />
        </div>
      )
    );
  };
  useEffect(() => {
    getAllUsers();
  }, []);
  return <div className="body">{showAllUsers()}</div>;
}

export default ListTheUsers;
