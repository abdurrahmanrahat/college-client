import { Link } from "react-router-dom";
import useData from "../../Hooks/useData";
import AdmissionPageCover from "../../assets/admissionPage-cover.jpg";
import PageBanner from "../../components/PageBanner/PageBanner";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ButtonDesign from "../../components/ButtonDesign/ButtonDesign";

const Admission = () => {
  const [colleges] = useData();

  return (
    <div className="mb-10 mt-14 md:mt-0">
      <PageBanner
        CoverImg={AdmissionPageCover}
        title="Join College"
        des="You can now admit to your desired college"
      ></PageBanner>
      <SectionTitle subHeading="List Of" heading="Colleges"></SectionTitle>

      <div className="md:w-1/2 mx-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="text-2xl text-black text-center">Name</th>
              <th className="text-2xl text-black md:pr-20">Action</th>
            </tr>
          </thead>
          <tbody>
            {colleges.map((c) => (
              <tr key={c._id} className="border-t border-neutral-200">
                <td className="text-lg text-center">{c.collegeName}</td>
                <td>
                  <Link to={`/admitForm/${c._id}`}>
                    <ButtonDesign
                      name="Admit"
                      bgColor="#FFBD00"
                      textColor="#000000"
                    ></ButtonDesign>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admission;
