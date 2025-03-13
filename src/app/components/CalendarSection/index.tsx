"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// CalendarSection component displays a dropdown for selecting calendar events
const CalendarSection = () => {
  // State to track the selected option and dropdown visibility
  const [selectedOption, setSelectedOption] = useState("Upcoming Interviews");
  const [isOpen, setIsOpen] = useState(false);

  // Dropdown options
  const options = [
    "Upcoming interviews",
    "Team Meeting",
    "Project Deadline",
    "Other Event",
  ];

  return (
    <div className="space-y-4 bg-white rounded-lg">
      {/* Container for "My Calendar" and Dropdown */}
      <div className="w-full">
        {/* My Calendar Title */}
        <h1 className="text-base font-bold text-gray-800 p-3 -mb-6">
          My Calendar
        </h1>

        {/* Custom Dropdown */}
        <div className="relative w-full">
          {/* Dropdown Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex justify-between items-center w-full px-4 py-2 rounded-lg shadow-sm text-left focus:outline-none"
          >
            <small className="text-gray-500 truncate -mx-1 font-[100]">
              {selectedOption === "Upcoming Interviews"
                ? "Upcoming interviews"
                : selectedOption}
            </small>
            {/* Dropdown Icon */}
            <span className="absolute right-2 bottom-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-5 h-5 ml-2 transition-transform ${
                  isOpen ? "transform rotate-180" : ""
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>

          {/* Dropdown Options */}
          <AnimatePresence>
            {isOpen && (
              <motion.ul
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden z-10 w-full"
              >
                {options.map((option, index) => (
                  <motion.li
                    key={index}
                    onClick={() => {
                      setSelectedOption(option);
                      setIsOpen(false);
                    }}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    whileHover={{ backgroundColor: "#f3f4f6" }}
                  >
                    {option}
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default CalendarSection;
