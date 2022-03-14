import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Auth0Provider } from "@auth0/auth0-react";
import config from "./auth_config.json";
import history from "./utils/history";
import { createStore } from "redux";
import { Provider } from "react-redux";
import allReducers from "./reducers";

require("./assets/theme.min.css");

const reduxStore = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const onRedirectCallback = (appState) => {
    history.push(
        appState && appState.returnTo
            ? appState.returnTo
            : window.location.pathname
    );
};

ReactDOM.render(
    <Auth0Provider
        domain={config.domain}
        clientId={config.clientId}
        audience={config.audience}
        redirectUri={window.location.origin}
        onRedirectCallback={onRedirectCallback}
    >
        <Provider store={reduxStore}>
            <App />
        </Provider>
    </Auth0Provider>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
