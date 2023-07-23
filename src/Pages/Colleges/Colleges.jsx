import useData from "../../Hooks/useData";
import CollegePageCover from "../../assets/collegePage-cover.jpg";
import PageBanner from "../../components/PageBanner/PageBanner";
import CardOfCollege from "./CardOfCollege";

const Colleges = () => {
  const [colleges] = useData();

  return (
    <div>
      <PageBanner
        CoverImg={CollegePageCover}
        title="All Colleges Together"
        des="Here we see simple card with atraching the information of colleges"
      ></PageBanner>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-20">
        {colleges.map((college) => (
          <CardOfCollege key={college._id} college={college}></CardOfCollege>
        ))}
      </div>
    </div>
  );
};

export default Colleges;
