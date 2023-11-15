import Carousel from "../Carousel/Carousel";
import Colleges from "../Colleges/Colleges";
import CountParallax from "../CountParallax/CountParallax";
import Gallery from "../Gallery/Gallery";
import Research from "../Research/Research";
import Subscribe from "../Subscribe/Subscribe";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="mt-14 md:mt-0">
      <Carousel></Carousel>

      <Colleges></Colleges>

      <Gallery></Gallery>

      <Research></Research>

      <CountParallax></CountParallax>

      <Testimonial></Testimonial>

      <Subscribe></Subscribe>
    </div>
  );
};

export default Home;
