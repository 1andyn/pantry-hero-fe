import React, { Fragment } from 'react';

import Hero from '../components/Hero';
import Primary from '../components/Primary';
import { useAuth0 } from '@auth0/auth0-react';

const Home = (props) => {
    const { user } = props;

    console.log(user);

    return (
        <Fragment>
            {!user && <Hero />}
            {user && <Primary user={user} />}
            <hr />
        </Fragment>
    );
};

export default Home;
