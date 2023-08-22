import Header from '../Components/Header';
import Slider from '../Components/Slide';
import GoogMap from "../Components/GoogMap";
import Rousel from '../Components/Rousel';
import Footer from "../Components/Footer";
import Award2023 from '../Components/Award2023';
import NewAward from '../Components/NewAward';
import BestOf from "../Components/BestOf";
// import BestOfCarousel from '../Components/BestOfCarousel';
// import BestOfCarousel2 from '../Components/BestOfCarousel2';
import ClickMe from '../Components/ClickMe';

function Home () {                   

    return (
        <div>
            <Header/>
            <Rousel />
            <Slider />
            <ClickMe />
            <GoogMap />
            <Award2023 />
            <NewAward />
            <BestOf />
            {/* <BestOfCarousel />
            <BestOfCarousel2 /> */}
            <Footer />
        </div>
    )
}

export default Home;