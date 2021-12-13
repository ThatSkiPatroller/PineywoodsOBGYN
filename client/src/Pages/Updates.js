import React from 'react';
import Header from '../Components/Header';
import Headings from '../Components/Headings';
import UpdatesDiv from '../Components/UpdatesDiv';
import Footer from '../Components/Footer';

function Updates () {
    return (
        <div>
            <Header />
            <Headings header='Updates' />
            <UpdatesDiv />
            <Footer />
        </div>
    )
}

export default Updates;