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
    <div className="flex flex-col md:flex-row sm:space-x-4 w-full bg-white p-3 rounded-lg">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Job Title, Company, or Keywords"
        // className="w-full px-4 py-2 border border-gray-300 rounded-lg"
        className="w-full px-4 py-2 focus:outline-none"
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
          className="flex bg-foreground text-primary p-2 rounded-lg w-full space-x-2 items-center justify-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
        <Image src="/assets/search-white.svg" alt="search" width={15} height={15} className="mx-5 lg:mx-0"/>
          <p>Search</p>
        </motion.button>
    </div>
  );
};

export default SearchComponent;