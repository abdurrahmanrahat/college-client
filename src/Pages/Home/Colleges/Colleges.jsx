import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CollegeCard from "./CollegeCard";
import useData from "../../../Hooks/useData";

const Colleges = () => {
  // const { colleges } = useContext(AuthContext);
  const [colleges] = useData();

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
