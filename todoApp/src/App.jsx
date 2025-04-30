import React from "react";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import TodoApp from "./components/TodoApp";
import ResultCalculator from "./components/ResultCalculator";
import DataTable from "./components/DataTable";

const App = () => {
  return (
    <Router>
      <div className="p-6">
        <h1 className="text-2xl font-bold text-center mb-4">Multi-Task React App</h1>

        <nav className="flex gap-4 justify-center mb-6">
          <Link to="/result" className="text-blue-500 ">Result Calculator</Link>
          <Link to="/todo" className="text-blue-500 ">Todo App</Link>
          <Link to="/table" className="text-blue-500 ">Data Table</Link>
        </nav>

        <Routes>
          <Route path="/result" element={<ResultCalculator />} />
          <Route path="/todo" element={<TodoApp />} />
          <Route path="/table" element={<DataTable />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
