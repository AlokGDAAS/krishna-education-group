import React from "react";

const Upcoming_exams = () => {
  return (
    <div className="bg-white w-2/3 rounded-xl shadow-xl mx-auto p-6 mt-6">
      <h2 className="text-2xl font-bold text-gray-700 mb-4 text-center">
        Upcoming Exams
      </h2>

      <div className="overflow-x-auto">
        <table className="w-11/12 mx-auto text-center border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-blue-600 to-blue-500 text-white">
              <th className="py-3 px-4 border border-blue-400 text-lg font-semibold rounded-l-lg">
                Examination
              </th>
              <th className="py-3 px-4 border border-blue-400 text-lg font-semibold rounded-r-lg">
                Date
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="hover:bg-blue-50 transition">
              <td className="py-3 px-4 border border-gray-300 text-gray-700 font-medium">
                UPPSC Pre
              </td>
              <td className="py-3 px-4 border border-gray-300 text-gray-700 font-medium">
                12-10-2025
              </td>
            </tr>


            <tr className="hover:bg-blue-50 transition">
              <td className="py-3 px-4 border border-gray-300 text-gray-700 font-medium">
                UPPSC Mains
              </td>
              <td className="py-3 px-4 border border-gray-300 text-gray-700 font-medium">
                To be notified
              </td>
            </tr>



          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Upcoming_exams;
