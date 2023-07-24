import Carousel from "../Carousel/Carousel";
import Colleges from "../Colleges/Colleges";
import Gallery from "../Gallery/Gallery";
import Research from "../Research/Research";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Carousel></Carousel>

      <Colleges></Colleges>

      <Gallery></Gallery>

      <Research></Research>

      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
