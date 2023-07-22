import { FaArrowRight } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const CollegeDetails = () => {
  const college = useLoaderData();
  const {
    collegeName,
    collegeImg,
    admissionDate,
    admissionProcess,
    events,
    eventsDetails,
    researchWork,
    researchHistory,
    sports,
    sportsA,
  } = college;

  return (
    <div>
        <SectionTitle subHeading='See Details' heading='One College'></SectionTitle>
      <div className="md:flex gap-6 py-8">
        <div className="md:w-2/3">
          <div className="relative h-80 rounded-lg overflow-hidden">
            <img
              className="w-full h-full object-cover transform scale-105 hover:scale-110 transition-transform duration-300"
              src={collegeImg}
              alt=""
            />
            <h2 className="absolute bottom-0 left-0 bg-neutral-900 bg-opacity-70 px-4 py-2 text-white text-xl font-semibold rounded-tr-lg">
              {collegeName}
            </h2>
          </div>
          <div className="mt-6">
            <p className="text-xl font-semibold text-neutral-800">
              College Events:
            </p>
            <ul className="ml-4 text-neutral-600">
              {events.map((e, i) => (
                <li key={i} className="mb-1">
                  {e}
                </li>
              ))}
            </ul>
            <p className="text-neutral-800 mt-2">{eventsDetails}</p>
            <br />
            <p className="text-neutral-800 mt-2">
              <span className="font-semibold">Sport Ground:</span> {sportsA}
            </p>
          </div>
        </div>
        <div className="md:w-1/3">
          <div>
            <h2 className="text-xl font-semibold mt-4 flex items-center">
              <FaArrowRight className="mr-2" /> Admission start on{" "}
              {admissionDate}
            </h2>
          </div>
          <div className="bg-neutral-100 rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">Research of College</h2>
            <p>
              <span className="font-semibold">{researchWork}:</span>{" "}
              {researchHistory}
            </p>
            <br />
            <div>
              <h2 className="text-xl font-semibold mb-2">
                College Admission Process
              </h2>
              <ul className="ml-4 text-neutral-600">
                {admissionProcess.map((ap, i) => (
                  <li key={i} className="mb-1">
                    {ap}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-4">
              <h2 className="text-xl font-semibold mb-2">
                College Sports List
              </h2>
              <p className="text-lg">{sports}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeDetails;
