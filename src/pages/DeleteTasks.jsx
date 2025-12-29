import { useTasks } from "../context/TaskContext";
import { Link } from "react-router-dom";

const DeleteTasks = () => {
  const { tasks } = useTasks();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-red-400">
        Delete Tasks
      </h2>

      {tasks.length === 0 ? (
        <p className="text-gray-400">
          No tasks available to delete.
        </p>
      ) : (
        <div className="grid md:grid-cols-2 gap-4">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="bg-gray-800 p-4 rounded-lg"
            >
              <h3 className="font-semibold text-lg">
                {task.title}
              </h3>

              <p className="text-sm text-gray-400">
                {task.description}
              </p>

              <div className="mt-3">
                <Link
                  to={`/delete/${task.id}`}
                  className="text-red-400 hover:underline"
                >
                  Delete This Task →
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DeleteTasks;
