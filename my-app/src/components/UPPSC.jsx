import React, { useState } from "react";
import { UPPSC_brief_history } from "./UPPSC_data";
import All_Examinations from "./All_Examinations";

const UPPSC = () => {
  const [lan, setLan] = useState("hi");
  const [name, setName] = useState("English"); // button text for next language

  const language = () => {
    setLan((prev) => (prev === "hi" ? "en" : "hi"));
    setName((prev) => (prev === "हिंदी" ? "English" : "हिंदी"));
  };

  return (
    <div>
      <All_Examinations />

      <div className="text-white md:w-8/12 mx-auto py-4">
        <div className="flex justify-between">
          <p></p>
          <p
            className="bg-green-200 px-4 py-1 rounded-full cursor-pointer text-gray-700"
            onClick={language}
          >
            {name}
          </p>
        </div>
        <p className="text-center text-4xl font-bold">UPPSC</p>
        <div className="flex gap-4 md:gap-2 md:justify-between pt-4 font-semibold text-gray-200 text-sm md:text-base flex-wrap w-11/12 justify-center mx-auto">
          <p className="px-4 py-1 rounded-full bg-green-600 cursor-pointer"><a to="#history-uppsc" >Brief History</a></p>
          <p className="px-4 py-1 rounded-full bg-green-600 cursor-pointer"><a href="#about-uppsc"  >About the Examination</a></p>
          <p className="px-4 py-1 rounded-full bg-green-600 cursor-pointer"><a href="#pcs-exams">PCS EXAMS</a></p>
          <p className="px-4 py-1 rounded-full bg-green-600 cursor-pointer">Syllabus , pattern</p>
        </div>


        {UPPSC_brief_history[lan].para_1}
      </div>
    </div>
  );
};

export default UPPSC;
