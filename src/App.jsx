import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Home from "./pages/Home";


import Dashboard from "./pages/Dashboard";
import CreateTask from "./pages/CreateTask";
import TaskList from "./pages/TaskList";
import UpdateTasks from "./pages/UpdateTasks";
import EditTask from "./pages/EditTask";
import DeleteTasks from "./pages/DeleteTasks";
import DeleteTask from "./pages/DeleteTask";

import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Header />

        <main className="p-6 flex-1 overflow-y-auto">
          <Routes>
            {/* Dashboard */}
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />


            {/* CREATE */}
            <Route path="/create" element={<CreateTask />} />

            {/* READ */}
            <Route path="/tasks" element={<TaskList />} />

            {/* UPDATE */}
            <Route path="/update-tasks" element={<UpdateTasks />} />
            <Route path="/edit/:id" element={<EditTask />} />

            {/* DELETE */}
            <Route path="/delete-tasks" element={<DeleteTasks />} />
            <Route path="/delete/:id" element={<DeleteTask />} />
          </Routes>
        </main>
      </div>

      {/* Toast Notifications */}
      <Toaster position="top-right" />
    </div>
  );
}

export default App;
