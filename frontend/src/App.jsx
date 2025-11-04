import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import TaskManager from "./components/TaskManager";
import ApiData from "./pages/ApiData";  
const Home = () => (
  <div className="text-center space-y-4">
    <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400">
      Welcome to PLP Task Manager
    </h1>
    <p className="text-gray-600 dark:text-gray-300">
      Manage your daily tasks, explore API data, and switch themes.
    </p>
  </div>
);

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tasks" element={<TaskManager />} />
        <Route path="api" element={<ApiData />} />  {/* NEW ROUTE */}
      </Route>
    </Routes>
  );
};

export default App;
