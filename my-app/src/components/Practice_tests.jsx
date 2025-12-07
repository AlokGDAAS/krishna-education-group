import React from "react";
import { useNavigate } from "react-router-dom";



const Practice_test = () => {
  const navigate = useNavigate();



  const Card = ({ link, name, subname }) => {
    return (
      <div
        className="cursor-pointer bg-green-600 px-4 py-2 rounded text-white font-semibold text-center  w-7/12 mx-auto"
        onClick={() => {navigate(link);}
          
        }
      >
        {name} {subname && `- ${subname}`}
      </div>
    );
  };

  const o_level_data = [
    { id: 8, link: "/practice-test-o-level/o-level-en-part-1", name: "O Level", subname: "English Part-1" },
    { id: 9, link: "/practice-test-o-level/o-level-en-part-2", name: "O Level", subname: "English Part-2" },
    { id: 10, link: "/practice-test-o-level/o-level-en-part-3", name: "O Level", subname: "English Part-3" },
    { id: 11, link: "/practice-test-o-level/o-level-en-part-4", name: "O Level", subname: "English Part-4" },
    { id: 12, link: "/practice-test-o-level/o-level-en-part-5", name: "O Level", subname: "English Part-5" },
  ];

  const o_level_data_2 = [
    { id: 18, link: "/practice-test-o-level_2/o-level_2-en-part-1", name: "O Level_2", subname: "English Part-1" },

  ];

  const uppsc_data = [
    { id: 13, link: "/practice-test-uppsc/uppsc-hi-part-1", name: "UPPSC", subname: "Hindi - Part-1" },
    { id: 14, link: "/practice-test-uppsc/uppsc-hi-part-2", name: "UPPSC", subname: "Hindi - Part-2" },
    { id: 15, link: "/practice-test-uppsc/uppsc-hi-part-3", name: "UPPSC", subname: "Hindi - Part-3" },
    { id: 16, link: "/practice-test-uppsc/uppsc-hi-part-4", name: "UPPSC", subname: "Hindi - Part-4" },
    { id: 17, link: "/practice-test-uppsc/uppsc-hi-part-5", name: "UPPSC", subname: "Hindi - Part-5" },
  ];

  return (
    <div className="bg-white/70 min-h-screen rounded shadow-lg py-4">
      {/* O LEVEL SECTION */}
      <div className="md:w-8/12 w-11/12 mx-auto mt-4 bg-white rounded shadow-lg py-6 space-y-3">
        <h1 className="text-3xl font-bold text-center text-slate-700 text-shadow-lg">
          O Level Practice Test
        </h1>

        {o_level_data.map((item) => (
          <div key={item.id}>
            <Card link={item.link} name={item.name} subname={item.subname} />
          </div>
        ))}
      </div>

      {/* UPPSC SECTION */}
      <div className="md:w-8/12 w-11/12  mx-auto mt-8 py-6 space-y-3 rounded shadow-lg bg-white">
        <h1 className="text-3xl font-bold text-center text-slate-700 text-shadow-lg">
          UPPSC Practice Test
        </h1>

        {uppsc_data.map((item) => (
          <div key={item.id}>
            <Card link={item.link} name={item.name} subname={item.subname} />
          </div>
        ))}
      </div>

      {/* O level 2 section */}
      <div className="md:w-8/12 w-11/12  mx-auto mt-8 py-6 space-y-3 rounded shadow-lg bg-white">
        <h1 className="text-3xl font-bold text-center text-slate-700 text-shadow-lg">
          O Level 2 Practice test
        </h1>

        {o_level_data_2.map((item) => (
          <div key={item.id}>
            <Card link={item.link} name={item.name} subname={item.subname} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Practice_test;

