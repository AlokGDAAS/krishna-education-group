import React from "react";

const UPPSC_quiz_solved = ({ q, index, answers, score, handleSelect }) => {
  const isCorrect = (opt) => score !== null && opt === q.answer;
  const isWrong = (opt) =>
    score !== null && answers[index] === opt && opt !== q.answer;

  return (
    <div className="mb-6 border-b pb-4">
      {/* Question */}
      <p className="font-semibold mb-2">
        {index + 1}. {q.question}
      </p>

      {/* Statements */}
      {q.statements &&
        q.statements.map((stat, j) => (
          <ol
            key={j}
            className="pb-1 font-medium pl-8 list-decimal"
          >
            {j + 1}. {stat}
          </ol>
        ))}

      {/* Statement Question */}
      {q.statement_q && (
        <p className="font-bold mt-2">{q.statement_q}</p>
      )}

      {/* List I & List II */}
      {q.list_i && q.list_ii && (
        <div className="flex gap-8">
          <div>
            {q.list_i.map((l_1, k) => (
              <p key={k}>{l_1}</p>
            ))}
          </div>
          <div>
            {q.list_ii.map((l_2, k) => (
              <p key={k}>{l_2}</p>
            ))}
          </div>
        </div>
      )}

      {/* Options */}
      <div className="mt-2 space-y-1">
        {q.options.map((opt, i) => (
          <label
            key={i}
            className={`block rounded-md px-3 py-2 flex items-center justify-between
              ${score === null ? "cursor-pointer hover:bg-gray-100" : ""}
              ${isCorrect(opt)
                ? "border border-green-600 bg-green-100 text-green-800 font-semibold"
                : ""}
              ${isWrong(opt)
                ? "border border-red-600 bg-red-100 text-red-800 font-semibold"
                : ""}
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

            {/* ✔ / ✖ icon after submit */}
            {score !== null && (
              <span className="text-xl font-bold">
                {isCorrect(opt) && "✔"}
                {isWrong(opt) && "✖"}
              </span>
            )}
          </label>
        ))}
      </div>
    </div>
  );
};

export default UPPSC_quiz_solved;
