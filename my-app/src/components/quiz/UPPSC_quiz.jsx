import React, { useState } from "react";
import { UPPSC_test_hi_1_questions_part1 } from "../quiz-data/UPPSC_quiz_data";
import { UPPSC_test_hi_1_questions_part2 } from "../quiz-data/UPPSC_quiz_data";
import { UPPSC_test_hi_1_questions_part3 } from "../quiz-data/UPPSC_quiz_data";
import { UPPSC_test_hi_1_questions_part4 } from "../quiz-data/UPPSC_quiz_data";
import { UPPSC_test_hi_1_questions_part5 } from "../quiz-data/UPPSC_quiz_data";
import { useNavigate, useParams } from "react-router-dom";

const UPPSC_quiz = () => {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [inputs, setInputs] = useState({});
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

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit_f = (e) => {
    e.preventDefault();
    setDetails(inputs);
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
      {!details && (
        <div className="exam-container md:w-8/12 mx-auto bg-white rounded-xl shadow-lg p-8">
          <form
            className="md:w-6/12 mx-auto border p-3 rounded"
            onSubmit={handleSubmit_f}
          >
            <div className="">
              <label className="block font-bold ">First Name*</label>
              <input
                type="text"
                name="firstname"
                value={inputs.firstname || ""}
                onChange={handleChange}
                placeholder="Please enter your first name"
                className="border border-gray-300 w-full px-4 py-1 rounded my-2"
              />
            </div>
            <div>
              <label className="block font-bold">Last Name</label>
              <input
                type="text"
                name="lastname"
                value={inputs.lastname || ""}
                onChange={handleChange}
                placeholder="Please enter your last name"
                className="border border-gray-300 w-full px-4 py-1 rounded my-2"
              />
            </div>
            <div>
              <label className="block font-bold">Mobile</label>
              <input
                type="number"
                name="Mobile"
                value={inputs.Mobile || ""}
                onChange={handleChange}
                placeholder="Please enter your mobile"
                className="border border-gray-300 w-full px-4 py-1 rounded my-2 "
              />
            </div>

            <button
              type="submit"
              className="bg-gray-400 px-2 py-1 rounded text-white md:w-2/12 w-4/12 mx-auto block mt-4 mb-2 cursor-pointer"
            >
              Submit
            </button>
          </form>
        </div>
      )}

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
                <div key={index} className="mb-6 border-b pb-4">
                  <p className="font-semibold mb-2">
                    {index + 1}. {q.question}
                  </p>

                  {q.statements &&
                    q.statements.map((stat, j) => (
                      <ol
                        key={j}
                        className="pb-1 font-medium pl-8 list-decimal"
                      >
                        {j + 1} . {stat}
                      </ol>
                    ))}

                  {q.statement_q && (
                    <p className="font-bold mt-2">{q.statement_q}</p>
                  )}

                  {q.list_i && q.list_ii && (
                    <div className="flex gap-8">
                      <div>
                        {q.list_i.map((l_1, k) => (
                          <p>{l_1}</p>
                        ))}
                      </div>
                      <div>
                        {q.list_ii.map((l_2, l) => (
                          <p>{l_2}</p>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mt-2 space-y-1">
                    {q.options.map((opt, i) => {
                      const isCorrect = score !== null && opt === q.answer;
                      const isWrong =
                        score !== null &&
                        answers[index] === opt &&
                        opt !== q.answer;

                      return (
                        <label
                          key={i}
                          className={`block rounded-md px-3 py-2 flex items-center justify-between
        ${score === null ? "cursor-pointer hover:bg-gray-100" : ""}
        ${
          isCorrect
            ? "border border-green-600 bg-green-100 text-green-800 font-semibold"
            : ""
        }
        ${
          isWrong
            ? "border border-red-600 bg-red-100 text-red-800 font-semibold"
            : ""
        }
      `}
                        >
                          <div>
                            <input
                              type="radio"
                              name={`q-${index}`}
                              value={opt}
                              checked={answers[index] === opt}
                              disabled={score !== null}
                              onChange={() => handleSelect(index, opt)}
                              className="mr-2"
                            />
                            {opt}
                          </div>

                          {/* ICONS AFTER SUBMIT */}
                          {score !== null && (
                            <span className="text-xl font-bold">
                              {isCorrect && "✔"}
                              {isWrong && "✖"}
                            </span>
                          )}
                        </label>
                      );
                    })}
                  </div>
                </div>
              ))}
              <div className="flex justify-between">
              <button
                className="mt-4 px-6 py-2 rounded-lg text-white bg-blue-800 cursor-pointer"                
                onClick={handleSubmit}
                
              >
                Submit Test
              </button>

              <div className="mt-4  rounded-lg text-white  " >
               Attempted {Object.keys(answers).length || 0}/{questions.length}
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
                <div key={index} className="mb-6 border-b pb-4">
                  <p className="font-semibold mb-2">
                    {index + 1}. {q.question}
                  </p>

                  {q.statements &&
                    q.statements.map((stat, j) => (
                      <ol
                        key={j}
                        className="pb-1 font-medium pl-8 list-decimal"
                      >
                        {j + 1} . {stat}
                      </ol>
                    ))}

                  {q.statement_q && (
                    <p className="font-bold mt-2">{q.statement_q}</p>
                  )}

                  {q.list_i && q.list_ii && (
                    <div className="flex gap-8">
                      <div>
                        {q.list_i.map((l_1, k) => (
                          <p>{l_1}</p>
                        ))}
                      </div>
                      <div>
                        {q.list_ii.map((l_2, l) => (
                          <p>{l_2}</p>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mt-2 space-y-1">
                    {q.options.map((opt, i) => {
                      const isCorrect = score !== null && opt === q.answer;
                      const isWrong =
                        score !== null &&
                        answers[index] === opt &&
                        opt !== q.answer;

                      return (
                        <label
                          key={i}
                          className={`block rounded-md px-3 py-2 flex items-center justify-between
        ${score === null ? "cursor-pointer hover:bg-gray-100" : ""}
        ${
          isCorrect
            ? "border border-green-600 bg-green-100 text-green-800 font-semibold"
            : ""
        }
        ${
          isWrong
            ? "border border-red-600 bg-red-100 text-red-800 font-semibold"
            : ""
        }
      `}
                        >
                          <div>
                            <input
                              type="radio"
                              name={`q-${index}`}
                              value={opt}
                              checked={answers[index] === opt}
                              disabled={score !== null}
                              onChange={() => handleSelect(index, opt)}
                              className="mr-2"
                            />
                            {opt}
                          </div>

                          {/* ICONS AFTER SUBMIT */}
                          {score !== null && (
                            <span className="text-xl font-bold">
                              {isCorrect && "✔"}
                              {isWrong && "✖"}
                            </span>
                          )}
                        </label>

                        
                      );
                    })}
                  </div>
                </div>
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
