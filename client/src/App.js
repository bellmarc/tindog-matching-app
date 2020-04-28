import React from "react";
import { Switch, Route } from "react-router-dom";
import { LastLocationProvider } from "react-router-last-location";
import Navbar from "./components/Navbar";
import Home from "./components/Home.js";
import Download from "./components/Download.js";
import Features from "./components/Features.js";
import Press from "./components/Press.js";
import Pricing from "./components/Pricing.js";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact.js";
// import Category from "./components/Category.js";



class App extends React.Component {


  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <LastLocationProvider>
          <Route path="/" component={Home}/>
          <Route path="download" component={Download}/>
          <Route path="features" component={Features}/>
          <Route path="press" component={Press}/>
          <Route path="pricing" component={Pricing}>
          </Route>
          <Route path="testimonials" components={Testimonials}/>
          <Route path="contact" components={Contact}/>
          {/* <Route path="/" component={Home} /> */}
          {/* <Route path={`:catId`} component={Category}/> */}
          </LastLocationProvider>
        </Switch>
      </div>
    );
  }
}

export default App
