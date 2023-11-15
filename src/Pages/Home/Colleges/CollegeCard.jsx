import { Link } from "react-router-dom";
import ButtonDesign from "../../../components/ButtonDesign/ButtonDesign";

const CollegeCard = ({ college }) => {
  const {
    _id,
    collegeName,
    collegeImg,
    admissionDate,
    events,
    researchHistory,
    sports,
  } = college;

  return (
    <div className="card md:w-96 bg-base-100 shadow-xl rounded-lg p-4 border border-neutral-700">
      <figure className="relative h-40">
        <img
          className="w-full h-full object-cover rounded-t-lg"
          src={collegeImg}
          alt={collegeName}
        />
        <figcaption className="absolute bottom-0 left-0 bg-neutral-900 bg-opacity-70 px-2 py-1 rounded-br-lg">
          <h2 className="text-lg font-semibold text-white">{collegeName}</h2>
        </figcaption>
      </figure>
      <div className="card-body mt-4">
        <div className="font-semibold text-neutral-800 mb-2">
          College Events:
        </div>
        <div className="ml-4 text-neutral-600">
          {events.map((e, i) => (
            <li key={i} className="mb-1">
              {e}
            </li>
          ))}
        </div>
        <p className="text-neutral-800 mt-2">
          <span className="font-semibold">Our Sports:</span> {sports}
        </p>
        <p className="text-neutral-800 mt-2">
          <span className="font-semibold">Research History:</span>{" "}
          {researchHistory}
        </p>
      </div>
      <div className="card-actions flex justify-between mt-4">
        <p className="text-neutral-800">
          <span className="font-semibold">Admission On:</span> {admissionDate}
        </p>
        <Link to={`/college/${_id}`}>
          <ButtonDesign name="Details" bgColor="#FFAE27"></ButtonDesign>
        </Link>
      </div>
    </div>
  );
};

export default CollegeCard;
