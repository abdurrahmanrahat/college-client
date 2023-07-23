import { useEffect, useState } from "react";

const useData = () => {
  const [colleges, setColleges] = useState([]);

  // get colleges data from database
  useEffect(() => {
    fetch("http://localhost:5000/colleges")
      .then((res) => res.json())
      .then((data) => setColleges(data));
  }, []);
  return [colleges];
};

export default useData;
