import PageBanner from "../../components/PageBanner/PageBanner";
import myCollegeImg from "../../assets/my-college-cover.png";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const MyCollege = () => {
  const [student, setStudent] = useState([]);
  const { user } = useContext(AuthContext);

  const url = `https://college-server-gilt.vercel.app/student?email=${user?.email}`;

  useEffect(() => {
    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setStudent(data[0]));
  }, [url]);
  console.log(student);

  const college = student?.college;
  console.log(college);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const { message } = data;
    console.log(message);

    const testimonial = {
      name: user.displayName,
      photo: user.photoURL,
      message,
      rating: 5,
    };

    // send testimonial to the server with http request
    fetch("https://college-server-gilt.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(testimonial),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("inside post response", data);
        if (data.insertedId) {
          reset();
          Swal.fire({
            title: "Success!",
            text: "Your review done, Hurry!!",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="mt-14 md:mt-0">
      <PageBanner
        CoverImg={myCollegeImg}
        title="Graduate Space"
        des="Here shows simple details of my admitted college"
      ></PageBanner>
      <div className="md:m-20 bg-white rounded-lg shadow-md p-8 text-center">
        <img
          className="md:w-2/3 mx-auto h-80 object-cover rounded-t-lg"
          src={college?.collegeImg}
          alt=""
        />
        <h2 className="text-3xl font-bold mt-4">{college?.collegeName}</h2>
        <p className="text-xl mt-2">
          <span className="font-semibold">My Subject:</span> {student?.subject}
        </p>
        <p className="text-lg">
          <span className="font-semibold">Out Research Count:</span>{" "}
          {college?.researchCount}
        </p>
        <div className="mt-6">
          <h4 className="text-2xl font-semibold">Our Sports Section:</h4>
          <p className="text-lg">{college?.sports}</p>
        </div>
        <div className="mt-6">
          <h4 className="text-2xl font-semibold">Our Events with Details:</h4>
          <div className="flex justify-center">
            <ul className="list-disc list-inside text-start">
              {college?.events.map((e, i) => (
                <li key={i} className="text-lg">
                  {e}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-lg mt-4 md:w-2/3 mx-auto">
            {college?.eventsDetails}
          </p>
        </div>
      </div>

      {/* feedback input */}
      <div>
        <SectionTitle
          subHeading="Write About"
          heading="Your College"
        ></SectionTitle>
        {/* Form For Admission */}
        <form onSubmit={handleSubmit(onSubmit)} className="px-20">
          <div className="md:w-2/3 mx-auto">
            <div className="form-control mx-auto">
              <textarea
                {...register("message", { required: true })}
                className="textarea textarea-bordered border rounded-md border-gray-300 focus:outline-[#0B0016] bg-gray-100 text-gray-900"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center my-10">
            <input
              className="btn mt-4 uppercase bg-[#FFBD00] hover:bg-black hover:scale-95 transition-transform duration-600 border-0 hover:border-2 border-white text-white font-medium rounded"
              type="submit"
              value="Feedback"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyCollege;
