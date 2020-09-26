import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

function Maps(props) {
  console.log(props);
  return (
    <div>
      <Map
        google={props.google}
        zoom={8}
        style={{
          width: "700px",
          height: "400px",
        }}
        initialCenter={{ lat: 47.444, lng: -122.176 }}
      />
      <div>
        <div>
          <span>lat</span>
          <span>:</span>
          <span>{props.coordinates.lat}</span>
        </div>
        <div>
          <span>lng</span>
          <span>:</span>
          <span>{props.coordinates.lng}</span>
        </div>
      </div>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyD_NVUq2trU-2qPhhUbYC5top5PG6voWi4",
})(Maps);
