import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CollegeCard from "./CollegeCard";

const Colleges = () => {
  const { colleges } = useContext(AuthContext);
  console.log(colleges);
  return (
    <div className="mt-24">
      <SectionTitle
        subHeading="Our Popular"
        heading="3 Colleges"
      ></SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-0">
        {colleges.slice(1, 4).map((college) => (
          <CollegeCard key={college._id} college={college}></CollegeCard>
        ))}
      </div>
    </div>
  );
};

export default Colleges;
