import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Research = () => {
  const [researches, setResearches] = useState([]);

  useEffect(() => {
    fetch("paper.json")
      .then((res) => res.json())
      .then((data) => setResearches(data));
  }, []);

  return (
    <div className="mt-24">
      <SectionTitle
        subHeading="Research Paper"
        heading="With Links"
      ></SectionTitle>
      <p className="md:w-5/6 text-center mx-auto -mt-4">
        A research paper is an academic document presenting original findings on
        a specific topic, contributing to knowledge in the field. It is
        published in journals or presented at conferences. Here you see our
        students contribution on this field.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {researches.map((paper, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold text-neutral-900 mb-3">
              {paper.title}
            </h3>
            <p className="text-neutral-700 leading-relaxed mb-4">
              {paper.description}
            </p>
            <a
              href={paper.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline inline-block text-lg"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Research;
