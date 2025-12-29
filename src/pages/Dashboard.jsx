import { useTasks } from "../context/TaskContext"

const Dashboard = () => {
  const { tasks } = useTasks()

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-gray-800 p-4 rounded">
        Total Tasks: {tasks.length}
      </div>
      <div className="bg-gray-800 p-4 rounded">
        Pending: {tasks.filter(t => t.status === "Pending").length}
      </div>
      <div className="bg-gray-800 p-4 rounded">
        Completed: {tasks.filter(t => t.status === "Completed").length}
      </div>
    </div>
  )
}

export default Dashboard
