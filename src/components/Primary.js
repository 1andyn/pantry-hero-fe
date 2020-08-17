import React from "react";

import logo from "../assets/logo.svg";
import { useAuth0 } from "@auth0/auth0-react";

const Primary = () => {
    const {
        user,
    } = useAuth0();
    
    return (
        <div className="text-center hero my-5">


        <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" />
        <h1 className="mb-4">Pantry Hero - Placeholder</h1>

        <p className="lead">
        <b>{user.email}</b>, You're logged in nerd!!
        </p>
        </div>
    );
};

export default Primary;
