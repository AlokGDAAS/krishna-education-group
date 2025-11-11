import React, { useState } from "react";
import { o_level_data} from '../Exams/O_level_data'
import All_Examinations from "../components/All_Examinations";

const O_level = () => {

  const [lan, setLan] = useState("hi");
  const [name, setName] = useState("English"); // button text for next language

  const language = () => {
    setLan((prev) => (prev === "hi" ? "en" : "hi"));
    setName((prev) => (prev === "हिंदी" ? "English" : "हिंदी"));
  };

  return (
    <div>
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
        <p className="text-center text-4xl font-bold">O Level course</p>
        <div className="flex gap-2 justify-between pt-4 font-semibold text-gray-200">
          <p className="px-4 py-1 rounded-full bg-green-600 cursor-pointer">Brief History</p>
          <p className="px-4 py-1 rounded-full bg-green-600 cursor-pointer">About the Examination</p>
          <p className="px-4 py-1 rounded-full bg-green-600 cursor-pointer">Eligibility Crietaria</p>
          <p className="px-4 py-1 rounded-full bg-green-600 cursor-pointer">Examination syllabus , pattern</p>
        </div>
        <h2 className="text-gray-300 font-semibold text-2xl py-4">
          
        </h2>

        {o_level_data[lan].para_1}
      </div>
    </div>
    </div>
  )
}

export default O_level