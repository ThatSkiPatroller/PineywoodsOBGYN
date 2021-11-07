import React from "react";
import Header from '../Components/Header';
import Slider from '../Components/Slide';
import GoogMap from "../Components/GoogMap";
import Rousel from '../Components/Rousel';

function Home () {
    return (
        <div>
            <Header/>
            <Rousel />
            <Slider />
            <GoogMap />
        </div>
    )
}

export default Home;