import { FaArrowRight } from "react-icons/fa";

const ButtonDesign = ({ name, bgColor }) => {
    return (
        <button className={`btn uppercase bg-[${bgColor}] hover:bg-black hover:scale-95 transition-transform duration-600 border-0 hover:border-2 border-white text-white font-medium rounded`}>
            {name} <FaArrowRight />
        </button>
    );
};

export default ButtonDesign;