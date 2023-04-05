import Header from '../Components/Header';
import Slider from '../Components/Slide';
import GoogMap from "../Components/GoogMap";
import Rousel from '../Components/Rousel';
import Footer from "../Components/Footer";
import BestOf from "../Components/BestOf";
import ClickMe from '../Components/ClickMe';

function Home () {                   

    return (
        <div>
            <Header/>
            <Rousel />
            <Slider />
            <ClickMe />
            <GoogMap />
            <BestOf />
            <Footer />
        </div>
    )
}

export default Home;