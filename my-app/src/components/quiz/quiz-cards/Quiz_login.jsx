import React, { useState } from "react";

const Quiz_login = ({ fields = [], onSubmit }) => {
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputs); // send data to parent
  };

  return (
    <form
      className="md:w-6/12 mx-auto border p-3 rounded shadow-md bg-white"
      onSubmit={handleFormSubmit}
    >
      {fields.map((field) => (
        <div key={field.name} className="my-3">
          <label className="block font-bold">{field.label}</label>
          <input
            type={field.type || "text"}
            name={field.name}
            value={inputs[field.name] || ""}
            placeholder={field.placeholder}
            onChange={handleChange}
            className="border border-gray-300 w-full px-4 py-1 rounded"
          />
        </div>
      ))}

      <button
        type="submit"
        className="bg-gray-600 px-4 py-2 rounded text-white mx-auto block mt-4 cursor-pointer"
      >
        Submit
      </button>
    </form>
  );
};

export default Quiz_login;
