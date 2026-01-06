import React from "react";
import { useParams } from "react-router-dom";
import M2_R5_Jan2023_Set1 from "../M2_R5_Jan2023_Set1.json";
import M2_R5_Jul2022_Set1 from "../M2_R5_July_2022_Set1.json";

const O_level_quiz_2_read_mode = () => {
  const { slug } = useParams();

  const topics = [
    "HTML",
    "CSS",
    "CSS Framework",
    "Javascript",
    "Angular",
    "Editors",
    "Web Publishing and Browsing",
    "Photo Editor",
  ];

  const questions_data = [
    {
      head: "M2_R5_Jan2023_Set1_read_mode",
      d: M2_R5_Jan2023_Set1,
      heading: "O Level M2-R5 (Jan 2023) - Read Mode",
    },
    {
      head: "M2_R5_Jul2022_Set1_read_mode",
      d: M2_R5_Jul2022_Set1,
      heading: "O Level M2-R5 (July 2022) - Read Mode",
    },
  ];

  const selected = questions_data.find(q => q.head === slug);

  if (!selected) {
    return (
      <p className="text-center mt-10 text-red-600">
        Invalid Test URL
      </p>
    );
  }

  const questions = selected.d.filter(q => topics.includes(q.topic));

  return (
    <div className="min-h-screen py-6">
      <div className="exam-container md:w-8/12 mx-auto bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {selected.heading}
        </h2>

        {questions.map((q, index) => (
          <div key={index} className="mb-6 border-b pb-4">
            {/* Question */}
            <p className="font-semibold mb-2">
              {index + 1}. {q.question}
            </p>

            {/* Statements (if any) */}
            {q.statements &&
              q.statements.map((stat, j) => (
                <ol
                  key={j}
                  className="pb-1 font-medium pl-8 list-decimal"
                >
                  {stat}
                </ol>
              ))}

            {q.statement_q && (
              <p className="font-bold mt-2">{q.statement_q}</p>
            )}

            {/* Options */}
            <div className="mt-2 space-y-1">
              {q.options.map((opt, i) => {
                const isCorrect = opt === q.answer;
                return (
                  <div
                    key={i}
                    className={`px-3 py-1 rounded-md ${
                      isCorrect
                        ? "bg-green-100 border border-green-400 font-semibold"
                        : "bg-gray-50"
                    }`}
                  >
                    {opt}
                  </div>
                );
              })}
            </div>


          <div className="border m-2 p-2 rounded bg-blue-100">
            {/* Explanation */}
            {q.explanation && (
              <p className="mt-1 text-gray-900">
                <h1 className="font-semibold text-center">Explanation</h1>
                <p className="text-sm">
                  {q.explanation}
                </p>
                
              </p>
            )}

            {/* Correct Answer */}
            <p className="mt-2 text-green-700 font-semibold">
              ✔ Correct Answer: {q.answer}
            </p>

          </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default O_level_quiz_2_read_mode;
