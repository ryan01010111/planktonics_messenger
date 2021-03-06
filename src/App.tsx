import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import { MessageProvider } from "./components/contexts/MessageContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login";
import Register from "./components/Register";
import Chat from "./components/Chat";

function App() {
  return (
    <Router>
      <MessageProvider>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <ProtectedRoute path="/" component={Chat} />
        </Switch>
      </MessageProvider>
    </Router>
  );
}

export default App;
