import React, { Fragment } from "react";

import Hero from "../components/Hero";
import Primary from "../components/Primary";
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const {
    isAuthenticated,
    } = useAuth0();

return(
  <Fragment>
    {!isAuthenticated && (<Hero />)}
    {isAuthenticated && (<Primary />)}
    <hr />
  </Fragment>);
};

export default Home;
