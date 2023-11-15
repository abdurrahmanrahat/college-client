import Img1 from "../../../assets/Subscribe/s1.jpg";
import Img2 from "../../../assets/Subscribe/s2.jpg";
import Img3 from "../../../assets/Subscribe/s3.jpg";

const Subscribe = () => {
  return (
    <div className="bg-[#F2F2F2] py-20 md:flex gap-6">
      <div className="md:w-[70%] ">
        <h2 className="text-3xl font-medium text-center md:px-32">
          Welcome to <span className="text-[#1077D4]">College Booking</span> a
          prestigious secondary school
        </h2>
        <div className="md:flex gap-12 mt-12">
          <div className="flex flex-col gap-y-4 text-center px-6 py-10 bg-white hover:shadow-xl shadow-white duration-500">
            <div className="flex justify-center items-center">
              <img src={Img1} alt="" />
            </div>
            <h3 className="text-2xl font-[400]">Our school</h3>
            <p>
              We take pride in our famous teaching traditions & achievements.
            </p>
          </div>
          <div className="flex flex-col gap-y-4 text-center px-6 py-10 bg-white hover:shadow-xl shadow-white duration-500">
            <div className="flex justify-center items-center">
              <img src={Img2} alt="" />
            </div>
            <h3 className="text-2xl font-[400]">Why Choose Us?</h3>
            <p>
              Our school ranked among the top 10 best school for children aged
              13-19.
            </p>
          </div>
          <div className="flex flex-col gap-y-4 text-center px-6 py-10 bg-white hover:shadow-xl shadow-white duration-500">
            <div className="flex justify-center items-center">
              <img src={Img3} alt="" />
            </div>
            <h3 className="text-2xl font-[400]">Achievements</h3>
            <p>
              We have had the honor of becoming the Best School for Science in
              2022.
            </p>
          </div>
        </div>
      </div>

      {/* subscribe div */}
      <div className="md:w-[30%] bg-[#1077D4] px-6 py-14 rounded text-white flex flex-col gap-y-4 justify-center items-center">
        <h2 className="text-4xl">Subscribe</h2>
        <h4 className="uppercase">TO OUR NEWSLETTERS</h4>
        <p className="text-center mb-4">
          Enter your email in the box below to receive the latest news and
          information about our activities and events.
        </p>
        <input
          type="email"
          placeholder="Your email"
          //   defaultValue={user?.email}

          className="input input-bordered w-full bg-[#174daad8] text-white focus:outline-none"
        />
        <button className="uppercase bg-white text-black py-[10px] px-[18px] rounded hover:bg-transparent hover:border hover:text-white">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
