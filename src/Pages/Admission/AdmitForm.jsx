import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const AdmitForm = () => {
  const college = useLoaderData();
  const { user } = useContext(AuthContext);

  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/student")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);
  // console.log(students);

  const alreadyAdmitted = students.filter((s) => s.email == user.email);
  // console.log(alreadyAdmitted);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const { name, email, number, subject, address, birth } = data;

    const userInfo = {
      name,
      email,
      photo: user.photoURL,
      number,
      subject,
      address,
      birth,
      collegeName: college.collegeName,
      college,
    };
    // console.log(userInfo);

    if (alreadyAdmitted) {
      Swal.fire({
        title: "Error!",
        text: "You already admitted, hush!!",
        icon: "error",
        showConfirmButton: false,
        timer: 1500,
      });
      reset();
    } else {
      // send newItem to the server with http request
      fetch("http://localhost:5000/students", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("inside post response", data);
          if (data.insertedId) {
            reset();
            Swal.fire({
              title: "Success!",
              text: "Your Admission done, Hurry!!",
              icon: "success",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    }
  };

  return (
    <div>
      <SectionTitle
        subHeading="For Admission Purpose"
        heading="Fill Up Forms"
      ></SectionTitle>

      {/* Form For Admission */}
      <form onSubmit={handleSubmit(onSubmit)} className="px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Candidate Name Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Candidate Name*</span>
            </label>
            <input
              type="text"
              placeholder="Your name"
              defaultValue={user.displayName}
              {...register("name", { required: true, maxLength: 80 })}
              className="input input-bordered w-full "
            />
          </div>

          {/* Candidate Email Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Candidate Email*</span>
            </label>
            <input
              type="email"
              placeholder="Your email"
              defaultValue={user.email}
              {...register("email", { required: true, maxLength: 80 })}
              className="input input-bordered w-full"
            />
          </div>

          {/* Candidate Phone Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">
                Candidate WhatsApp*
              </span>
            </label>
            <input
              type="number"
              placeholder="Your number"
              {...register("number", { required: true, maxLength: 80 })}
              className="input input-bordered w-full"
            />
          </div>

          {/* Candidate Subject Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">
                Candidate Subject*
              </span>
            </label>
            <input
              type="text"
              placeholder="Your subject like English, Bangla or Economics etc"
              {...register("subject", { required: true, maxLength: 80 })}
              className="input input-bordered w-full"
            />
          </div>

          {/* Candidate Subject Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">
                Candidate Address*
              </span>
            </label>
            <input
              type="text"
              placeholder="Your address"
              {...register("address", { required: true, maxLength: 120 })}
              className="input input-bordered w-full"
            />
          </div>

          {/* Candidate Subject Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">
                Candidate Date of Birth*
              </span>
            </label>
            <input
              type="date"
              {...register("birth", { required: true })}
              className="input input-bordered w-full"
            />
          </div>

          {/* File Upload
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Your Photo*</span>
            </label>
            <input
              type="file"
              {...register("photo", { required: true })}
              className="file-input file-input-bordered w-full "
            />
          </div> */}
        </div>

        {/* Submit Button */}
        <div className="text-center my-10">
          <input
            className="btn mt-4 uppercase bg-[#FFBD00] hover:bg-black hover:scale-95 transition-transform duration-600 border-0 hover:border-2 border-white text-white font-medium rounded"
            type="submit"
            value="Submit Form"
          />
        </div>
      </form>
    </div>
  );
};

export default AdmitForm;
