import React from 'react';

const Study_material = () => {
  return (
    <div className="md:flex justify-center mt-6 gap-4 font-semibold text-gray-700 text-sm">
      <div className="p-4 rounded-lg shadow-md bg-white flex flex-col items-center">
        <a href="/Modern_History_Test.pdf" target="_blank" rel="noopener noreferrer" className="w-fil ">
          <img
            src="./pdf_logo.png"
            alt="pdf-logo"
            className="w-24 cursor-pointer hover:scale-105 transition "
          />
        </a>
        <p className="pt-2"> Modern History Test</p>
      </div>

    </div>
  );
};

export default Study_material;
