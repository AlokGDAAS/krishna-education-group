import React from "react";
import { useNavigate } from "react-router-dom";

const Practice_test = () => {
  const navigate = useNavigate();

  const Card = ({ link, name, subname }) => {
    return (
      <div
        className="cursor-pointer bg-green-600 px-4 py-2 rounded text-white md:w-7/48 w-7/12 font-semibold text-center"
        onClick={() => navigate(link)} // ✅ Corrected
      >
        {name} {subname && `- ${subname}`}  {/* ✅ Corrected */}
      </div>
    );
  };

  const data = [
    { id: 1, link: "/practice-test/upsc-en-part-1", name: "UPSC", subname: "English - Part-1" },
    { id: 2, link: "/practice-test/upsc-en-part-2", name: "UPSC", subname: "English - Part-2" },
    { id: 3, link: "/practice-test/upsc-en-part-3", name: "UPSC", subname: "English - Part-3" },
    { id: 4, link: "/practice-test/upsc-hi-part-1", name: "UPSC", subname: "Hindi - Part-1" },
    { id: 5, link: "/practice-test/upsc-hi-part-2", name: "UPSC", subname: "Hindi - Part-2" },
    { id: 6, link: "/practice-test/upsc-hi-part-3", name: "UPSC", subname: "Hindi - Part-3" }, 
    

  ];

  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-700">Practice Test</h1>

      <div className="mt-4 space-y-3">
        {data.map((item) => (
          <div key={item.id}>  
            <Card link={item.link} name={item.name} subname={item.subname} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Practice_test;

