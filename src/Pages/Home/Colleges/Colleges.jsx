import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CollegeCard from "./CollegeCard";
import { useEffect, useRef, useState } from "react";

const Colleges = () => {
  const [search, setSearch] = useState("");

  const [colleges, setColleges] = useState([]);

  // get colleges data from database
  useEffect(() => {
    fetch(`http://localhost:5000/colleges?search=${search}`)
      .then((res) => res.json())
      .then((data) => setColleges(data));
  }, [search]);

  const searchRef = useRef(null);

  const handleSearch = () => {
    setSearch(searchRef.current.value);
  };

  return (
    <div className="mt-24 md:relative">
      <SectionTitle
        subHeading="Our Popular"
        heading="3 Colleges"
      ></SectionTitle>

      <div className="form-control ml-10 md:ml-0 md:absolute top-10 right-20">
        <div className="input-group">
          <input
            type="text"
            placeholder="Search…"
            ref={searchRef}
            className="input input-bordered rounded-md border-gray-300 focus:outline-[#0B0016] bg-gray-200 text-gray-900"
          />
          <button onClick={handleSearch} className="btn btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-0 mt-14">
        {colleges.slice(0, 3).map((college) => (
          <CollegeCard key={college._id} college={college}></CollegeCard>
        ))}
      </div>
    </div>
  );
};

export default Colleges;
