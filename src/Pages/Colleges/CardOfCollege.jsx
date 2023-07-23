import { Link } from "react-router-dom";
import ButtonDesign from "../../components/ButtonDesign/ButtonDesign";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const CardOfCollege = ({ college }) => {
  const { _id, collegeName, collegeImg, admissionDate, rating, researchCount } =
    college;

  return (
    <div className="card md:w-96 bg-base-100 shadow-xl rounded-lg p-4 border border-neutral-700 transition-transform transform hover:scale-105">
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
      <div className="text-center p-4 mt-4">
        <p className="text-neutral-800">
          <span className="font-semibold">Admission Process On:</span>{" "}
          {admissionDate}
        </p>
        <p className="text-neutral-800">
          <span className="font-semibold">Number of the Research:</span>{" "}
          {researchCount}
        </p>
      </div>
      <div className="card-actions flex justify-between mt-4">
        <Rating style={{ maxWidth: 150 }} value={rating} readOnly />
        <Link to={`/college/${_id}`}>
          <ButtonDesign
            name="Details"
            bgColor="#FFBD00"
            textColor="#000000"
          ></ButtonDesign>
        </Link>
      </div>
    </div>
  );
};

export default CardOfCollege;
