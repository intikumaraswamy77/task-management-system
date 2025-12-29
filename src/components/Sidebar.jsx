import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaTasks,
  FaPlus,
  FaEdit,
  FaTrash
} from "react-icons/fa";

const Sidebar = () => {
  const linkClass =
    "flex items-center gap-3 p-2 rounded hover:bg-gray-700 hover:text-green-400";

  return (
    <aside className="w-64 bg-gray-800 p-5 hidden md:block">
      <h2 className="text-2xl font-bold mb-8">TaskPro</h2>

      <nav className="space-y-2">
        <NavLink to="/" className={linkClass}>
          <FaHome /> Home
        </NavLink>

        <NavLink to="/dashboard" className={linkClass}>
          <FaHome /> Dashboard
        </NavLink>

        <NavLink to="/tasks" className={linkClass}>
          <FaTasks /> View Tasks (Read)
        </NavLink>

        <NavLink to="/create" className={linkClass}>
          <FaPlus /> Create Task
        </NavLink>

        <NavLink to="/update-tasks" className={linkClass}>
          <FaEdit /> Update Task
        </NavLink>

        <NavLink to="/delete-tasks" className={linkClass}>
          <FaTrash /> Delete Task
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
