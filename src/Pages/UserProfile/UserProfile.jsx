import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaEdit } from "react-icons/fa";
import ButtonDesign from "../../components/ButtonDesign/ButtonDesign";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const [students, setStudents] = useState([]);
  const { user } = useContext(AuthContext);

  const url = `https://college-server-gilt.vercel.app/student?email=${user?.email}`;

  useEffect(() => {
    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setStudents(data[0]));
  }, [url]);
  console.log(students);

  return (
    <div className="my-10 md:mx-48 p-8 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-lg shadow-md text-center">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-4xl font-bold text-neutral-900">My Profile</h2>
        <Link to='/profileEdit'>
          <button className="text-xl font-semibold bg-white px-4 py-2 rounded-lg hover:bg-yellow-500 transition-colors duration-300">
            <FaEdit className="inline -mt-1" /> Edit
          </button>
        </Link>
      </div>
      <div className="md:flex md:items-center mt-8">
        <div className="md:w-2/5">
          <img
            className="w-48 h-48 mx-auto mb-4 rounded-full object-cover"
            src={students?.photo}
            alt=""
          />
          <Link to='/profileEdit'>
            <span className="md:inline-block hidden">
              <ButtonDesign
                name="Edit Profile"
                bgColor="#FFBD00"
                textColor="#000000"
              ></ButtonDesign>
            </span>
          </Link>
        </div>
        <div className="md:w-3/5 md:text-left md:pl-10 flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <h4 className="text-xl font-bold text-neutral-800">Student ID:</h4>
            <p className="text-lg text-neutral-700">BCIC12-20023</p>
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="text-xl font-bold text-neutral-800">College:</h4>
            <p className="text-lg text-neutral-700">{students?.collegeName}</p>
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="text-xl font-bold text-neutral-800">Full Name:</h4>
            <p className="text-lg text-neutral-700">{students?.name}</p>
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="text-xl font-bold text-neutral-800">
              Email Address:
            </h4>
            <p className="text-lg text-neutral-700">{students?.email}</p>
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="text-xl font-bold text-neutral-800">
              Phone Number:
            </h4>
            <p className="text-lg text-neutral-700">{students?.number}</p>
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="text-xl font-bold text-neutral-800">
              Home Address:
            </h4>
            <p className="text-lg text-neutral-700">{students?.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
