import { useState } from "react";
import { questions } from "../components/Questions";

export default function Quiz() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleSelect(qIndex, option) {
    setAnswers(prev => ({
      ...prev,
      [qIndex]: option
    }));
  }

  function handleSubmit() {
    let score = 0;

    questions.forEach((q, i) => {
      if (answers[i] === q.answer) {
        score++;
      }
    });

    setSubmitted(score);
  }

  return (
    <div className="exam-container md:w-8/12 mx-auto rounded-xl shadow-lg p-8">

      {!submitted && submitted !== 0 ? (
        <>
          <h2>All Questions</h2>

          {questions.map((q, index) => (
            <div key={index} style={{ marginBottom: "20px" }}>
              <p className="question">
                {index + 1}. {q.question}
              </p>

              {q.options.map(opt => (
                <label key={opt} className="option-line">
                  <input
                    type="radio"
                    name={"q-" + index}
                    value={opt}
                    checked={answers[index] === opt}
                    onChange={() => handleSelect(index, opt)}
                  /> {" "}{opt}
                </label>
              ))}
            </div>
          ))}

          <button
            className="btn"
            onClick={handleSubmit}
            disabled={Object.keys(answers).length !== questions.length}
          >
            Submit Test
          </button>
        </>
      ) : (
        <div className="result-box">
          <h2>Test Completed</h2>
          <p>
            Your Score:
            <strong> {submitted} </strong> / {questions.length}
          </p>
        </div>
      )}
    </div>
  );
}

