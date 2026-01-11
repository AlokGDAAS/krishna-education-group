import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import M2_R5_Jan2022_Set1_theory from '../M2_R5_Jan2022_Set1_theory.json';

const O_level_quiz_2_theory = () => {
  const { slug } = useParams();
  const [visibleAnswers, setVisibleAnswers] = useState({});

  const toggleAnswer = (id) => {
    setVisibleAnswers((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

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
      head: "M2_R5_Jan2022_Set1_read_mode_theory",
      d: M2_R5_Jan2022_Set1_theory,
      heading: "O Level M2-R5 (Jan 2023) - Read Mode Theory",
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

  const questions = selected.d

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">
        {selected.heading}
      </h1>

      {questions.map((item) => (
        <div
          key={item.id}
          className="border rounded-md p-4 mb-4 shadow hover:shadow-lg transition-shadow bg-blue-100"
        >
          <div className="flex justify-between items-center ">
            <h2 className="text-lg font-semibold">
              {item.id}. {item.question}
            </h2>
            <button
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
              onClick={() => toggleAnswer(item.id)}
            >
              {visibleAnswers[item.id] ? "Hide Answer" : "Show Answer"}
            </button>
          </div>
          {visibleAnswers[item.id] && (
            <pre className="mt-3 bg-gray-100 p-3 rounded whitespace-pre-wrap">
              {item.answer}
            </pre>
          )}
        </div>
      ))}
    </div>
  );
};

export default O_level_quiz_2_theory;

