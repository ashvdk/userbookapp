import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import AllUsers from "./screens/AllUsers";
import Sidebar from "./components/Sidebar";
import Profile from "./screens/Profile";
import Posts from "./screens/Posts";
import Gallery from "./screens/Gallery";
import ToDo from "./screens/ToDo";
import Chat from "./components/Chat";
import PeopleToChatWith from "./components/PeopleToChatWith";

function App() {
  const [user, setUser] = useState(null);
  const [peopleToChaWith, setpeopleToChaWith] = useState(null);
  const saveUser = (user) => {
    setUser(user);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <AllUsers saveUser={saveUser} />
          </Route>
          <div
            style={{
              height: "100vh",
              width: "100vw",
              display: "flex",
              position: "relative",
            }}
          >
            <Sidebar />
            <Route
              exact
              path="/profile"
              render={(props) =>
                user ? <Profile {...props} user={user} /> : <Redirect to="/" />
              }
            />
            <Route
              exact
              path="/posts"
              render={(props) => <Posts {...props} user={user} />}
            />
            <Route
              exact
              path="/gallery"
              render={(props) => <Gallery {...props} user={user} />}
            />
            <Route
              exact
              path="/todo"
              render={(props) => <ToDo {...props} user={user} />}
            />
            <PeopleToChatWith user={peopleToChaWith} />
            <Chat
              onClick={(userToChatWith) => setpeopleToChaWith(userToChatWith)}
            />
          </div>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
