import { useParams, useNavigate } from "react-router-dom";
import { useTasks } from "../context/TaskContext";

const DeleteTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tasks, deleteTask } = useTasks();

  const task = tasks.find((t) => t.id === id);

  const handleDelete = () => {
    deleteTask(id);
    navigate("/delete-tasks");
  };

  const handleCancel = () => {
    navigate("/delete-tasks");
  };

  if (!task) {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6 text-red-400">Task Not Found</h2>
        <p className="text-gray-400">The task you're trying to delete doesn't exist.</p>
        <button
          onClick={() => navigate("/delete-tasks")}
          className="mt-4 bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded"
        >
          Back to Delete Tasks
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-xl bg-gray-800 p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-red-400">Delete Task</h2>

      <div className="bg-gray-700 p-4 rounded-lg mb-6">
        <h3 className="font-semibold text-lg mb-2">{task.title}</h3>
        <p className="text-gray-300 mb-3">{task.description}</p>
        <div className="flex gap-4 text-sm">
          <span className="text-gray-400">Priority: {task.priority}</span>
          <span className="text-gray-400">Status: {task.status}</span>
          {task.dueDate && (
            <span className="text-gray-400">Due: {task.dueDate}</span>
          )}
        </div>
      </div>

      <div className="bg-red-900/20 border border-red-500/30 p-4 rounded-lg mb-6">
        <p className="text-red-300">
          ⚠️ Are you sure you want to delete this task? This action cannot be undone.
        </p>
      </div>

      <div className="flex gap-3">
        <button
          onClick={handleDelete}
          className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded font-semibold"
        >
          Yes, Delete Task
        </button>
        <button
          onClick={handleCancel}
          className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded font-semibold"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteTask;
