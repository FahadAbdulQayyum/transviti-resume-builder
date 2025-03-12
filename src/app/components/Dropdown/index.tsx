import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Define Props Type
interface DropdownProps {
  options: string[]; // Array of dropdown options
  placeholder?: string; // Placeholder text (optional)
  defaultValue?: string; // Default selected value (optional)
  onSelect: (selectedOption: string) => void; // Callback for option selection
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  placeholder = "Select", // Default placeholder
  defaultValue,
  onSelect,
}) => {
  // State to track the selected option and dropdown visibility
  const [selectedOption, setSelectedOption] = useState(defaultValue || placeholder);
  const [isOpen, setIsOpen] = useState(false);

  // Handle Option Selection
  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option); // Pass the selected option back to the parent
  };

  return (
    <div className="relative w-full">
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full px-4 py-2 rounded-lg shadow-sm text-left focus:outline-none"
      >
        <small className="text-gray-500 truncate -mx-1 font-neueHaas font-[100]">
          {selectedOption}
        </small>
        {/* Dropdown Icon */}
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
                onClick={() => handleSelect(option)}
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
  );
};

export default Dropdown;