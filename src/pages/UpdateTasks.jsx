import { useTasks } from "../context/TaskContext";
import { Link } from "react-router-dom";

const UpdateTasks = () => {
  const { tasks } = useTasks();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">
        Update Tasks
      </h2>

      {tasks.length === 0 ? (
        <p className="text-gray-400">No tasks available to update.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-4">
          {tasks.map(task => (
            <div
              key={task.id}
              className="bg-gray-800 p-4 rounded"
            >
              <h3 className="font-semibold">{task.title}</h3>
              <p className="text-sm text-gray-400">
                {task.description}
              </p>

              <Link
                to={`/edit/${task.id}`}
                className="inline-block mt-3 text-blue-400"
              >
                Edit Task →
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UpdateTasks;
