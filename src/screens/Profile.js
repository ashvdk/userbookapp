import React, { useEffect } from "react";
import Header from "../components/Header";
import Name from "../components/Name";
import Details from "../components/Details";
import Image from "../components/Image";
import Maps from "../components/Maps";

function Profile(props) {
  const { user } = props;
  console.log(user);
  return (
    <div className="content">
      <Header user={user} title="Profile" />
      <div
        style={{
          display: "flex",
          marginTop: "4%",
        }}
      >
        <div className="left">
          <div style={{ textAlign: "center" }}>
            <Image
              src={user.profilepicture}
              style={{ width: "250px", height: "250px", borderRadius: "50%" }}
            />
          </div>
          <div
            style={{
              textAlign: "center",
              margin: "20px 0px",
            }}
          >
            <Name name={user.name} fontSize={{ fontSize: "20px" }} />
          </div>
          <Details title="Username" value={user.username} />
          <Details title="E-mail" value={user.email} />
          <Details title="Phone" value={user.phone} />
          <Details title="Website" value={user.website} />
          <div>
            <div
              style={{
                display: "flex",
              }}
            >
              <div
                style={{
                  width: "30%",
                }}
              ></div>
              <div
                style={{
                  width: "40%",
                  borderTop: "1px solid #9a9a9a",
                }}
              ></div>
              <div
                style={{
                  width: "30%",
                }}
              ></div>
            </div>
            <div
              style={{
                textAlign: "center",
                margin: "15px 0px",
                color: "#9a9a9a",
                fontSize: "23px",
              }}
            >
              Company
            </div>
          </div>
          <Details title="Name" value={user.company.name} />
          <Details title="Catch Pharse" value={user.company.catchPhrase} />
          <Details title="Bs" value={user.company.bs} />
        </div>
        <div className="right">
          <div
            style={{
              display: "flex",
            }}
          >
            <div style={{ width: "50%" }}>
              <div
                style={{
                  textAlign: "left",
                  margin: "15px 0px",
                  color: "#9a9a9a",
                  fontSize: "23px",
                  paddingLeft: "12%",
                }}
              >
                Address
              </div>
              <Details title="Street" value={user.address.street} />
              <Details title="Suite" value={user.address.suite} />
              <Details title="City" value={user.address.city} />
              <Details title="Zipcode" value={user.address.zipcode} />
            </div>
            <div style={{ width: "20%" }}></div>
            <div style={{ width: "20%" }}></div>
          </div>
          <div
            style={{
              paddingLeft: "5%",
            }}
          >
            <Maps coordinates={user.address.geo} />
          </div>
        </div>
      </div>
    </div>
  );
}

//AIzaSyD_NVUq2trU-2qPhhUbYC5top5PG6voWi4
export default Profile;
