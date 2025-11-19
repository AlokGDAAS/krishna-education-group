import React, { useState } from "react";
import { UPPSC_test_hi_1_questions_part1 } from "../quiz-data/UPPSC_quiz_data";
import { UPPSC_test_hi_1_questions_part2 } from "../quiz-data/UPPSC_quiz_data";
import { UPPSC_test_hi_1_questions_part3 } from "../quiz-data/UPPSC_quiz_data";
import { UPPSC_test_hi_1_questions_part4 } from "../quiz-data/UPPSC_quiz_data";
import { UPPSC_test_hi_1_questions_part5 } from "../quiz-data/UPPSC_quiz_data";
import { useNavigate, useParams } from "react-router-dom";
import Quiz_login from "./quiz-cards/Quiz_login";
import UPPSC_quiz_question_card from "./quiz-cards/UPPSC_quiz_question_card";
import UPPSC_quiz_solved from "./quiz-cards/UPPSC_quiz_solved";

const UPPSC_quiz = () => {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  const [details, setDetails] = useState(false);
  const { slug } = useParams();
  const navigate = useNavigate();

  const questions_data = [
    {
      head: "uppsc-hi-part-1",
      d: UPPSC_test_hi_1_questions_part1,
      heading: "UPPSC Practice Test Part-1",
    },
    {
      head: "uppsc-hi-part-2",
      d: UPPSC_test_hi_1_questions_part2,
      heading: "UPPSC Practice Test Part-2",
    },
    {
      head: "uppsc-hi-part-3",
      d: UPPSC_test_hi_1_questions_part3,
      heading: "UPPSC Practice Test Part-3",
    },
    {
      head: "uppsc-hi-part-4",
      d: UPPSC_test_hi_1_questions_part4,
      heading: "UPPSC Practice Test Part-4",
    },
    {
      head: "uppsc-hi-part-5",
      d: UPPSC_test_hi_1_questions_part5,
      heading: "UPPSC Practice Test Part-5",
    },
  ];

  const fields = [
    {
      name: "firstname",
      label: "First Name*",
      placeholder: "Please enter your first name",
      type: "text",
    },
    {
      name: "lastname",
      label: "Last Name",
      placeholder: "Please enter your last name",
      type: "text",
    },
    {
      name: "mobile",
      label: "Mobile",
      placeholder: "Please enter your mobile",
      type: "number",
    },
  ];

  const handleSubmit_f = (data) => {
    setDetails(data);
  };

  const selected = questions_data.find((q) => q.head === slug);
  const questions = selected ? selected.d : [];

  function handleSelect(qIndex, option) {
    setAnswers((prev) => ({
      ...prev,
      [qIndex]: option,
    }));
  }

  function handleSubmit() {
    let total = 0;
    questions.forEach((q, i) => {
      if (answers[i] === q.answer) total++;
    });
    setScore(total);
    console.log(answers);
  }

  function handleRetry() {
    setAnswers({});
    setScore(null);
    navigate("/practice-test");
  }

  return (
    <div className="min-h-screen  py-6">
      {!details && <Quiz_login fields={fields} onSubmit={handleSubmit_f} />}

      {!details.firstname ? (
        <div className="exam-container md:w-8/12 mx-auto bg-white rounded-xl shadow-lg p-8">
          <p className="text-center text-gray-600 mt-6">
            Please fill out your name and mobile to start the test.
          </p>
        </div>
      ) : (
        <div className="exam-container md:w-8/12 mx-auto bg-white rounded-xl shadow-lg p-8">
          {score === null ? (
            <>
              <h2 className="text-2xl font-bold mb-6 text-center">
                {selected.heading}
              </h2>

              {questions.map((q, index) => (
                <UPPSC_quiz_question_card
                  q={questions[index]}
                  index={index}
                  answers={answers}
                  score={score}
                  handleSelect={handleSelect}
                />
              ))}
              <div className="flex justify-between">
                <button
                  className="mt-4 px-6 py-2 rounded-lg text-white bg-blue-800 cursor-pointer"
                  onClick={handleSubmit}
                >
                  Submit Test
                </button>

                <div className="mt-4  rounded-lg text-gray-800 font-bold  ">
                  Attempted {Object.keys(answers).length || 0}/
                  {questions.length}
                </div>
              </div>
            </>
          ) : (
            <div className="">
              <div className="text-center bg-green-500 p-4 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Test Completed 🎉</h2>
                <p className="text-lg">
                  {details.firstname} {details.lastname}
                </p>
                <p className="text-lg">
                  Your Score:{" "}
                  <strong className="text-blue-600">
                    {score} / {questions.length}
                  </strong>
                </p>
                <button
                  onClick={handleRetry}
                  className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  Retry Test
                </button>
              </div>

              <div className="mt-8">
                {questions.map((q, index) => (
                  <UPPSC_quiz_solved
                    q={questions[index]}
                    index={index}
                    answers={answers}
                    score={score}
                    handleSelect={handleSelect}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UPPSC_quiz;
