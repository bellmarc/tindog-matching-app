import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" component={Home} />
          {/* <Route path="/" component={Home} /> */}
        </Switch>
      </div>
    );
  }
}

export default App
