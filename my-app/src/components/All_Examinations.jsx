import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const All_Examinations = () => {

    const navigate = useNavigate()
  return (
    <div>
      <h1 className="text-white font-semibold text-lg text-center py-4">
        Know Your Examination
      </h1>
      <div className="md:border border-gray-400">
        <div className="w-8/12 mx-auto py-4 md:flex text-center gap-4 exams">
          <div className="md:w-10/12">
            <p className="" onClick={()=>navigate('/uppsc')}>UPPSC</p>
            <p className="mt-2">Lower PCS</p>
          </div>
          <div className="md:w-10/12 mt-2 md:mt-0">
            <p className="">RO/ARO</p>
            <p className="mt-2" onClick={()=>navigate('/o-level')}>O Level</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default All_Examinations;
