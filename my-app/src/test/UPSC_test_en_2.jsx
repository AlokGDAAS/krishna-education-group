import React, { useState } from "react";
import { UPSC_test_en_2_questions } from "./UPSC_test_en_2_que";

const UPSC_test_en_2 = () => {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [inputs, setInputs] = useState({});
  const [details , setDetails] = useState(false)

  

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit_f = (e) => {
    e.preventDefault();
    setDetails(inputs)
    navigate('/practice-test')    

  };

  const questions = UPSC_test_en_2_questions;

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
  }

  function handleRetry() {
    setAnswers({});
    setScore(null);
  }

  return (
    <div className="min-h-screen  py-6">
      {!details && (<div className="exam-container md:w-8/12 mx-auto bg-white rounded-xl shadow-lg p-8">
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
            className="bg-gray-400 px-2 py-1 rounded text-white md:w-2/12 w-4/12  mx-auto block mt-4 mb-2 cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>)}

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
                UPSC Practice Test
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

                  <div className="mt-2 space-y-1">
                    {q.options.map((opt, i) => (
                      <label
                        key={i}
                        className="block cursor-pointer hover:bg-gray-100 rounded-md px-2 py-1"
                      >
                        <input
                          type="radio"
                          name={`q-${index}`}
                          value={opt}
                          checked={answers[index] === opt}
                          onChange={() => handleSelect(index, opt)}
                          className="mr-2"
                        />
                        {opt}
                      </label>
                    ))}
                  </div>
                </div>
              ))}

              <button
                className={`mt-4 px-6 py-2 rounded-lg text-white ${
                  Object.keys(answers).length === questions.length
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
                onClick={handleSubmit}
                disabled={Object.keys(answers).length !== questions.length}
              >
                Submit Test
              </button>
            </>
          ) : (
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Test Completed 🎉</h2>
              <p className="text-lg">{details.firstname} {details.lastname}</p>
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
          )}
        </div>
      )}
    </div>
  );
};

export default UPSC_test_en_2;

