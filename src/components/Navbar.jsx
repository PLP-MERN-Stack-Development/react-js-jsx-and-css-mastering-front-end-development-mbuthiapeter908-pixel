import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600 dark:text-blue-400"
        >
          Task Manager
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          <Link
            to="/"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition"
          >
            Home
          </Link>
          <Link
            to="/tasks"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition"
          >
            Tasks
          </Link>
          <Link
            to="/api"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition"
          >
            API Data
          </Link>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="ml-4 px-3 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            title="Toggle theme"
          >
            {theme === "light" ? "🌞 Light" : "🌙 Dark"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
