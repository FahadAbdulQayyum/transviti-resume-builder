"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// Navbar component provides navigation links and search functionality
const Navbar = () => {
  // State to manage the mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const Menu = [
    { label: "Top Companies", href: "TopCompany" },
    { label: "Job Tracker", href: "TopCompany" },
    { label: "Job Tracker", href: "TopCompany" },
    { label: "My Calendar", href: "TopCompany" },
    { label: "Documents", href: "TopCompany" },
    { label: "Messages", href: "TopCompany" },
    { label: "Notifications", href: "TopCompany" },
  ];

  return (
    <motion.div
      className="bg-white flex justify-between items-center px-4 sm:px-standardPadding py-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Left Side */}
      <div className="left-side flex items-center">
        {/* Logo */}
        <motion.div
          className="logo"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Image src="/assets/logo.svg" alt="Logo" width={40} height={40} />
        </motion.div>

        {/* Logo Title (Hidden on Small Screens) */}
        <motion.div
          className="logoTitle mx-3 text-foreground font-bold text-[16px] sm:block hidden"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Find Jobs
        </motion.div>

        {/* Desktop Menu (Hidden on Small Screens) */}
        <span className="hidden lg:flex space-x-4 text-textClr">
          {Menu.map((v) => (
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <li>{v.label}</li>
            </motion.ul>
          ))}
        </span>

        {/* Hamburger Menu (Visible on Small Screens) */}
        <button
          className="lg:hidden ml-4 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-textClr"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Right Side */}
      <div className="right-side flex items-center">
        {/* Search Bar */}
        <motion.div
          className="flex space-x-2 p-3 rounded-lg mx-2 bg-[#F6F9FF]"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Image src="/assets/search.svg" alt="search" width={15} height={15} />
          <input
            type="text"
            placeholder="Search"
            className="bg-[#F6F9FF] outline-none"
          />
        </motion.div>

        {/* Resume Builder Button (Hidden on Small Screens) */}
        <motion.button
          className="bg-foreground text-primary p-2 rounded-lg sm:block hidden"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Resume Builder
        </motion.button>

        {/* Profile Picture */}
        <motion.div
          className="w-10 h-10 rounded-full overflow-hidden mx-2"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Image
            src="/assets/profile.jpg"
            alt="Profile"
            width={40}
            height={40}
            className="object-cover w-full h-full"
          />
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="absolute top-16 left-0 w-full bg-white shadow-lg z-50"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="space-y-6 text-textClr p-4">
              {Menu.map((v) => (
                <li>
                  <Link href={v.href}>{v.label}</Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
