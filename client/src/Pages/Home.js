import React from "react";
import Header from '../Components/Header';
import Slider from '../Components/Slide';
import GoogMap from "../Components/GoogMap";
import Rousel from '../Components/Rousel';
import Footer from "../Components/Footer";

function Home () {
    return (
        <div>
            <Header/>
            <Rousel />
            <Slider />
            <GoogMap />
            <Footer />
        </div>
    )
}

export default Home;