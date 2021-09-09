import React from "react";
import Header from '../Components/Header';
import FadeInLogo from "../Components/FadeInLogo";
import Slider from '../Components/Slide'

function Home () {
    return (
        <div>
            <Header/>
            <FadeInLogo />
            <Slider />
        </div>
    )
}

export default Home;