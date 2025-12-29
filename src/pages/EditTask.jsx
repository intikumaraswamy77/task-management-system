import { useParams, useNavigate } from "react-router-dom";
import { useTasks } from "../context/TaskContext";
import { useState, useEffect } from "react";

const EditTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tasks, updateTask } = useTasks();

  const existingTask = tasks.find(task => task.id === id);

  const [task, setTask] = useState({
    title: "",
    description: "",
    priority: "Low",
    status: "Pending",
    dueDate: ""
  });

  useEffect(() => {
    if (existingTask) {
      setTask(existingTask);
    }
  }, [existingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTask(id, task);
    navigate("/tasks");
  };

  if (!existingTask) {
    return <p className="text-red-400">Task not found</p>;
  }

  return (
    <div className="max-w-xl bg-gray-800 p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Edit Task</h2>

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* TITLE */}
        <div>
          <label className="block mb-1 text-sm text-gray-300">
            Task Title
          </label>
          <input
            type="text"
            value={task.title}
            onChange={(e) =>
              setTask({ ...task, title: e.target.value })
            }
            className="w-full px-3 py-2 rounded bg-gray-900 text-white border border-gray-600 focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        {/* DESCRIPTION */}
        <div>
          <label className="block mb-1 text-sm text-gray-300">
            Task Description
          </label>
          <textarea
            value={task.description}
            onChange={(e) =>
              setTask({ ...task, description: e.target.value })
            }
            className="w-full px-3 py-2 rounded bg-gray-900 text-white border border-gray-600 focus:ring-2 focus:ring-green-500"
            rows="3"
          />
        </div>

        {/* PRIORITY */}
        <div>
          <label className="block mb-1 text-sm text-gray-300">
            Priority Level
          </label>
          <select
            value={task.priority}
            onChange={(e) =>
              setTask({ ...task, priority: e.target.value })
            }
            className="w-full px-3 py-2 rounded bg-gray-900 text-white border border-gray-600"
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>

        {/* STATUS */}
        <div>
          <label className="block mb-1 text-sm text-gray-300">
            Task Status
          </label>
          <select
            value={task.status}
            onChange={(e) =>
              setTask({ ...task, status: e.target.value })
            }
            className="w-full px-3 py-2 rounded bg-gray-900 text-white border border-gray-600"
          >
            <option>Pending</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>
        </div>

        {/* DUE DATE */}
        <div>
          <label className="block mb-1 text-sm text-gray-300">
            Due Date
          </label>
          <input
            type="date"
            value={task.dueDate}
            onChange={(e) =>
              setTask({ ...task, dueDate: e.target.value })
            }
            className="w-full px-3 py-2 rounded bg-gray-900 text-white border border-gray-600"
          />
        </div>

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded font-semibold"
        >
          Update Task
        </button>
      </form>
    </div>
  );
};

export default EditTask;
