import React from "react";

import logo from "../assets/logo.svg";

const Hero = () => (
  <div className="text-center hero my-5">
    <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" />
    <h1 className="mb-4">Pantry Hero - Placeholder</h1>

    <p className="lead">
      SPA using <a href="https://reactjs.org">React.js</a> and <b>Auth0</b> for authentication.
    </p>
  </div>
);

export default Hero;
