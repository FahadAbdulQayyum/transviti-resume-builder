"use client";

import React from "react";
import Dropdown from "../Dropdown"; // Import the reusable Dropdown component
import { motion } from "framer-motion";
import Image from "next/image";

const SearchComponent: React.FC = () => {
  // Handle Location Selection
  const handleLocationSelect = (location: string) => {
    console.log("Selected Location:", location);
  };

  // Handle Category Selection
  const handleCategorySelect = (category: string) => {
    console.log("Job Type:", category);
  };

  return (
    <div className="flex space-x-4 w-full bg-white p-3 rounded-lg">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Job Title, Company, or Keywords"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
      />

      {/* Location Dropdown */}
      <Dropdown
        options={["Select Locations", "New York", "San Francisco", "London"]}
        placeholder="Select Locations"
        onSelect={handleLocationSelect}
      />

      {/* Category Dropdown */}
      <Dropdown
        options={["Job Type", "Engineering", "Design", "Marketing"]}
        placeholder="Job Type"
        onSelect={handleCategorySelect}
      />
        {/* Resume Builder Button (Hidden on Small Screens) */}
        <motion.button
          className="flex bg-foreground text-primary p-2 rounded-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
        <Image src="/assets/search.svg" alt="search" width={15} height={15} />
          Search
        </motion.button>
    </div>
  );
};

export default SearchComponent;













// "use client";

// import React from "react";
// import Dropdown from "../Dropdown"; // Import the reusable Dropdown component

// const SearchComponent = () => {
//   // Handle Location Selection
//   const handleLocationSelect = (location: str) => {
//     console.log("Selected Location:", location);
//   };

//   // Handle Category Selection
//   const handleCategorySelect = (category) => {
//     console.log("Selected Category:", category);
//   };

//   return (
//     <div className="space-y-4">
//       {/* Search Input */}
//       <input
//         type="text"
//         placeholder="Job Title, Company, or Keywords"
//         className="w-full px-4 py-2 border border-gray-300 rounded-lg"
//       />

//       {/* Location Dropdown */}
//       <Dropdown
//         options={["Select Locations", "New York", "San Francisco", "London"]}
//         placeholder="Select Locations"
//         onSelect={handleLocationSelect}
//       />

//       {/* Category Dropdown */}
//       <Dropdown
//         options={["Select Category", "Engineering", "Design", "Marketing"]}
//         placeholder="Select Category"
//         onSelect={handleCategorySelect}
//       />
//     </div>
//   );
// };

// export default SearchComponent;











// // "use client"

// // import React from 'react'
// // import { motion, AnimatePresence } from "framer-motion";
// // import { useState } from "react";

// // const SearchComponent = () => {

// //     // State to track the selected option and dropdown visibility
// //   const [selectedOption, setSelectedOption] = useState("Select Locations");
// //   const [isOpen, setIsOpen] = useState(false);

// //   // Dropdown options
// //   const options = [
// //     "Select Locations"
// //   ];
// //   return (
// //     <div>
// //         <input type='text' placeholder='Job Title, Company, or Keywords'/>
        
// //         {/* Custom Dropdown */}
// //         <div className="relative w-full">
// //           {/* Dropdown Button */}
// //           <button
// //             onClick={() => setIsOpen(!isOpen)}
// //             className="flex justify-between items-center w-full px-4 py-2 rounded-lg shadow-sm text-left focus:outline-none"
// //           >
// //             <small className="text-gray-500 truncate -mx-1 font-neueHaas font-[100]">
// //               {selectedOption === "Select Locations"
// //                 ? "Select Locations"
// //                 : selectedOption}
// //             </small>
// //             {/* Dropdown Icon */}
// //                 <svg
// //                 xmlns="http://www.w3.org/2000/svg"
// //                 className={`w-5 h-5 ml-2 transition-transform ${
// //                     isOpen ? "transform rotate-180" : ""
// //                 }`}
// //                 viewBox="0 0 20 20"
// //                 fill="currentColor"
// //                 >
// //                 <path
// //                     fillRule="evenodd"
// //                     d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
// //                     clipRule="evenodd"
// //                 />
// //                 </svg>
// //           </button>

// //           {/* Dropdown Options */}
// //           <AnimatePresence>
// //             {isOpen && (
// //               <motion.ul
// //                 initial={{ opacity: 0, y: -10 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 exit={{ opacity: 0, y: -10 }}
// //                 transition={{ duration: 0.2 }}
// //                 className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden z-10 w-full"
// //               >
// //                 {options.map((option, index) => (
// //                   <motion.li
// //                     key={index}
// //                     onClick={() => {
// //                       setSelectedOption(option);
// //                       setIsOpen(false);
// //                     }}
// //                     className="px-4 py-2 cursor-pointer hover:bg-gray-100"
// //                     whileHover={{ backgroundColor: "#f3f4f6" }}
// //                   >
// //                     {option}
// //                   </motion.li>
// //                 ))}
// //               </motion.ul>
// //             )}
// //           </AnimatePresence>
// //         </div>
// //         {/* Custom Dropdown */}
// //         <div className="relative w-full">
// //           {/* Dropdown Button */}
// //           <button
// //             onClick={() => setIsOpen(!isOpen)}
// //             className="flex justify-between items-center w-full px-4 py-2 rounded-lg shadow-sm text-left focus:outline-none"
// //           >
// //             <small className="text-gray-500 truncate -mx-1 font-neueHaas font-[100]">
// //               {selectedOption === "Select Locations"
// //                 ? "Select Locations"
// //                 : selectedOption}
// //             </small>
// //             {/* Dropdown Icon */}
// //                 <svg
// //                 xmlns="http://www.w3.org/2000/svg"
// //                 className={`w-5 h-5 ml-2 transition-transform ${
// //                     isOpen ? "transform rotate-180" : ""
// //                 }`}
// //                 viewBox="0 0 20 20"
// //                 fill="currentColor"
// //                 >
// //                 <path
// //                     fillRule="evenodd"
// //                     d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
// //                     clipRule="evenodd"
// //                 />
// //                 </svg>
// //           </button>

// //           {/* Dropdown Options */}
// //           <AnimatePresence>
// //             {isOpen && (
// //               <motion.ul
// //                 initial={{ opacity: 0, y: -10 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 exit={{ opacity: 0, y: -10 }}
// //                 transition={{ duration: 0.2 }}
// //                 className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden z-10 w-full"
// //               >
// //                 {options.map((option, index) => (
// //                   <motion.li
// //                     key={index}
// //                     onClick={() => {
// //                       setSelectedOption(option);
// //                       setIsOpen(false);
// //                     }}
// //                     className="px-4 py-2 cursor-pointer hover:bg-gray-100"
// //                     whileHover={{ backgroundColor: "#f3f4f6" }}
// //                   >
// //                     {option}
// //                   </motion.li>
// //                 ))}
// //               </motion.ul>
// //             )}
// //           </AnimatePresence>
// //         </div>
// //     </div>
// //   )
// // }

// // export default SearchComponent