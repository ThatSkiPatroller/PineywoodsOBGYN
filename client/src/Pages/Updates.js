import React from 'react';
import Header from '../Components/Header';
import Headings from '../Components/Headings';
import UpdatesDiv from '../Components/UpdatesDiv';

function Updates () {
    return (
        <div>
            <Header />
            <Headings header='Updates' />
            <UpdatesDiv />
        </div>
    )
}

export default Updates;