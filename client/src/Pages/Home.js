import React from "react";
import Header from '../Components/Header';
import FadeInLogo from "../Components/FadeInLogo";
import Slider from '../Components/Slide';
import GoogMap from "../Components/GoogMap";

function Home () {
    return (
        <div>
            <Header/>
            <FadeInLogo />
            <Slider />
            <GoogMap />
        </div>
    )
}

export default Home;