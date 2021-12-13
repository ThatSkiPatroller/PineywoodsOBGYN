import React from "react";
import Header from '../Components/Header';
import Slider from '../Components/Slide';
import GoogMap from "../Components/GoogMap";
import Rousel from '../Components/Rousel';
import Facebook from "../Components/Facebook";
import Footer from "../Components/Footer";

function Home () {
    return (
        <div>
            <Header/>
            <Rousel />
            <Slider />
            <GoogMap />
            <Facebook />
            <Footer />
        </div>
    )
}

export default Home;