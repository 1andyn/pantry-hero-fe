import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from 'reactstrap';

import Loading from './components/Loading';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './views/Home';
import Profile from './views/Profile';
import { useAuth0 } from '@auth0/auth0-react';
import history from './utils/history';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';

// styles
import './App.css';

// AWS Auth
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

// fontawesome
import initFontAwesome from './utils/initFontAwesome';
initFontAwesome();

Amplify.configure(awsconfig);
Auth.configure(awsconfig);

const App = ({ signOut, user }) => {
    return (
        <BrowserRouter>
            <NavBar signOut={signOut} user={user} />
            <Routes>
                <Route path="/" element={<Home user={user} />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default withAuthenticator(App);
