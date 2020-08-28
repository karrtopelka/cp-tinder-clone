import React from "react";
import Header from "./Header";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            {/* Card */}
            <TinderCards />
            {/* Buttons */}
            <SwipeButtons />
          </Route>
          <Route path="/likes">
            <Header backButton />
            <h1>likesPage</h1>
          </Route>
          <Route path="/chats">
            <Header backButton />
            {/* Chats screen */}
            <Chats />
          </Route>
          <Route path="/chat/:person">
            <Header backButton />
            {/* Chat screen */}
            <ChatScreen />
          </Route>
          <Route path="/profile">
            <Header backButton />
            <h1>profilePage</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
