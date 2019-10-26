import React from 'react';

import LoggedNavbar from '../../components/LoggedNavbar/LoggedNavbar';

export default function Home({ history }) {
    return (
        <>
            <LoggedNavbar />
            <h1>Home page</h1>
        </>
    );
}