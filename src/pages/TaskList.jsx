import { useTasks } from "../context/TaskContext";
import { Link } from "react-router-dom";

const TaskList = () => {
  const { tasks } = useTasks();

  return (
    <div>
      {/* PAGE HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">
          View Tasks (Read Operation)
        </h2>

        <Link
          to="/create"
          className="bg-green-500 px-4 py-2 rounded"
        >
          + Create Task
        </Link>
      </div>

      {/* EMPTY STATE */}
      {tasks.length === 0 ? (
        <div className="bg-gray-800 p-8 rounded text-center">
          <p className="text-gray-400 mb-4">
            No tasks available.
          </p>

          <Link
            to="/create"
            className="text-green-400 underline"
          >
            Create your first task
          </Link>
        </div>
      ) : (
        /* TASK TABLE / CARD */
        <div className="grid md:grid-cols-2 gap-4">
          {tasks.map(task => (
            <div
              key={task.id}
              className="bg-gray-800 p-4 rounded-lg"
            >
              <h3 className="font-semibold text-lg">
                {task.title}
              </h3>

              <p className="text-gray-400 text-sm">
                {task.description}
              </p>

              <div className="mt-2 text-sm">
                <span className="mr-4">
                  Priority: <b>{task.priority}</b>
                </span>
                <span>
                  Status: <b>{task.status}</b>
                </span>
              </div>

              <div className="flex gap-4 mt-4">
                <Link
                  to={`/edit/${task.id}`}
                  className="text-blue-400"
                >
                  Edit
                </Link>

                <Link
                  to={`/delete/${task.id}`}
                  className="text-red-400"
                >
                  Delete
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskList;
