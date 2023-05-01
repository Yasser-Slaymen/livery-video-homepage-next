// import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import SolutionsPage from "./pages/SolutionsPage";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/solutionspage" element={<SolutionsPage />} />
      </Routes>
      
      
    </div>
  );
}
export default App;
