import { useEffect, useState } from "react";

const useData = () => {
  const [colleges, setColleges] = useState([]);

  // get colleges data from database
  useEffect(() => {
    fetch("https://college-server-gilt.vercel.app/colleges")
      .then((res) => res.json())
      .then((data) => setColleges(data));
  }, []);
  return [colleges];
};

export default useData;
