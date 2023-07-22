import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

import sliderImg1 from "../../../assets/BannerImg/banner1-min.jpg";
import sliderImg2 from "../../../assets/BannerImg/banner2-min.jpg";
import sliderImg6 from "../../../assets/BannerImg/banner6-min.jpg";
import sliderImg4 from "../../../assets/BannerImg/banner4-min.jpg";
import sliderImg5 from "../../../assets/BannerImg/banner5-min.jpg";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Carousel = () => {
  return (
    <div className="h-auto">
      <AutoplaySlider
        animation="cubeAnimation"
        play={false}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={4000}
      >
        <div data-src={sliderImg5} />
        <div data-src={sliderImg2} />
        <div data-src={sliderImg1} />
        <div data-src={sliderImg4} />
        <div data-src={sliderImg6} />
      </AutoplaySlider>
    </div>
  );
};

export default Carousel;
