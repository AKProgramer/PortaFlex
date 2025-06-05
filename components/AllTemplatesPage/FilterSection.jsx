"use client";
import React, { useState } from "react";

export default function FilterSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    "Choose your profession"
  );

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div>
      <div className="flex justify-center items-start pt-10">
        <div>
          <h1 className="text-xl font-bold mb-4 text-center font-neueMontreal tracking-widest">
            Pick a profession which describes you the best
          </h1>
          <div className="font-recklessNeue">
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="w-full px-4 py-2 mt-6 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-left flex justify-between items-center"
              >
                <span>{selectedOption}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 transform transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {isOpen && (
                <div className="absolute w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                  <ul className="max-h-60 overflow-y-auto">
                    <li
                      onClick={() => handleSelect("Software Engineer")}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    >
                      Software Engineer
                    </li>
                    <li
                      onClick={() => handleSelect("Designer")}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    >
                      Designer
                    </li>
                    <li
                      onClick={() => handleSelect("Product Manager")}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    >
                      Product Manager
                    </li>
                    <li
                      onClick={() => handleSelect("Data Scientist")}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    >
                      Data Scientist
                    </li>
                    <li
                      onClick={() => handleSelect("Teacher")}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    >
                      Teacher
                    </li>
                    <li
                      onClick={() => handleSelect("Entrepreneur")}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    >
                      Entrepreneur
                    </li>
                    <li
                      onClick={() => handleSelect("Researcher")}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    >
                      Researcher
                    </li>
                    <li
                      onClick={() => handleSelect("Artist")}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    >
                      Artist
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-16 border-t-[1px] mt-6 font-recklessNeue flex items-center justify-between px-10">
        {/* Heading */}
        <h1 className="text-xl">All {selectedOption !='Choose your profession' ? selectedOption: ''} Portfolios</h1>

        {/* Sort By Dropdown */}
        <div className="flex items-center space-x-2 relative">
  <span className="text-lg">Sort By:</span>

  {/* Custom Select Wrapper */}
  <div className="relative">
    <select className="appearance-none bg-transparent focus:outline-none font-bold rounded px-3 py-1 pr-8">
      <option value="minimalistic">Minimalistic</option>
      <option value="modern">Modern</option>
      <option value="classic">Classic</option>
      <option value="bold">Bold</option>
    </select>

   
  </div>
</div>


        
      </div>
    </div>
  );
}
