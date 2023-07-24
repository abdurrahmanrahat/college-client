import PageBanner from "../../components/PageBanner/PageBanner";
import myCollegeImg from "../../assets/my-college-cover.png";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";

const MyCollege = () => {
  const [student, setStudent] = useState([]);
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/student?email=${user?.email}`;

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
    const { review } = data;
    console.log(review);

    // const userInfo = {
    //   name,
    //   email,
    //   photo: user.photoURL,
    //   number,
    //   subject,
    //   address,
    //   birth,
    //   collegeName: college.collegeName,
    //   college,
    // };
    // console.log(userInfo);
  };

  return (
    <div>
      <PageBanner
        CoverImg={myCollegeImg}
        title="Graduate Space"
        des="Here shows simple details of my admitted college"
      ></PageBanner>
      <div className="m-20 bg-white rounded-lg shadow-md p-8 text-center">
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
                {...register("review", { required: true })}
                className="textarea textarea-bordered"
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
