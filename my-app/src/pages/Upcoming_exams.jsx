import React from "react";

  const Exam_date = ({exam , date}) => {
    return (
      <tr>
        <td className="py-3 px-4 border border-gray-300 text-gray-700 font-medium">
          {exam}
        </td>
        <td className="py-3 px-4 border border-gray-300 text-gray-700 font-medium">
          {date}
        </td>
      </tr>
    );
  };

const Upcoming_exams = () => {

  const exam_date_data =[
    {
      id:1,
      exam:"UPPSC Pre",
      date:"12-10-2025",
    },
    {
      id:2,
      exam:"UPPSC Mains",
      date:"To be notified",
    },
    {
      id:3,
      exam:"UP LT Grade (TGT)",
      date:"6,7,21 Dec 2025",
    },
    {
      id:4,
      exam:"EMRS TGT/PGT ",
      date:"13,14,21,Dec 2025",
    },
    {
      id:5,
      exam:"KVS-NVS Tier-1 (PRT/TGT/PGT)",
      date:"10,11 Jan 2026",
    },
    {
      id:5,
      exam:"NTA UGC NET ",
      date:"30 Dec 2025 to 7 Jan 2026",
    },
    {
      id:6,
      exam:"REET Mains",
      date:"17,21 Jan 2026",
    },
  ]

  return (
    <div className="bg-white md:w-2/3 rounded-xl shadow-xl mx-auto md:p-6 p-2 md:mt-6 ">
      <h2 className="text-lg font-bold text-gray-700 mb-4 text-center">
        Upcoming Exams
      </h2>

      <div className="overflow-x-auto">
        <table className="w-11/12 mx-auto text-center border-collapse">
          <thead className="text-sm md:text-lg">
            <tr className="bg-gradient-to-r from-blue-600 to-blue-500 text-white ">
              <th className="py-3 px-4 border border-blue-400  font-semibold rounded-l-lg">
                Examination
              </th>
              <th className="py-3 px-4 border border-blue-400  font-semibold rounded-r-lg">
                Date
              </th>
            </tr>
          </thead>

          <tbody className="text-xs md:text-base">
             {exam_date_data.map((item , i)=>(
              <Exam_date key={i} exam={item.exam} date={item.date}/>
             ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Upcoming_exams;
