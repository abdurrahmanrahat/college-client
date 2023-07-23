import Carousel from "../Carousel/Carousel";
import Colleges from "../Colleges/Colleges";
import Gallery from "../Gallery/Gallery";

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>

            <Colleges></Colleges>

            <Gallery></Gallery>
            <h2>Home Page</h2>
        </div>
    );
};

export default Home;