import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  // LOAD TASKS FROM LOCAL STORAGE
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  // SAVE TASKS TO LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // CREATE TASK
  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
    toast.success("Task Created");
  };

  // UPDATE TASK (PRESERVE ID)
  const updateTask = (id, updatedData) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, ...updatedData } : task
      )
    );
    toast.success("Task Updated");
  };

  // DELETE TASK
  const deleteTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== id)
    );
    toast.success("Task Deleted");
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        updateTask,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);
