import React from "react";
import Header from '../Components/Header';
import Slider from '../Components/Slide';
import GoogMap from "../Components/GoogMap";
import Rousel from '../Components/Rousel';
import Facebook from "../Components/Facebook";

function Home () {
    return (
        <div>
            <Header/>
            <Rousel />
            <Slider />
            <GoogMap />
            <Facebook />
        </div>
    )
}

export default Home;