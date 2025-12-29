const Home = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">

      {/* PROJECT TITLE */}
      <div>
        <h1 className="text-3xl font-bold mb-2">
          Task Management System
        </h1>
        <p className="text-gray-400">
          A React-based CRUD application designed to manage tasks efficiently.
        </p>
      </div>

      {/* PROJECT DESCRIPTION */}
      <div className="bg-gray-800 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-3">
          📌 About the Project
        </h2>
        <p className="text-gray-300 leading-relaxed">
          This project is a Task Management System developed using ReactJS.
          It allows users to manage their tasks by performing Create, Read,
          Update, and Delete (CRUD) operations.
          Each operation is implemented on a separate page to maintain clarity,
          modularity, and real-world application structure.
        </p>
      </div>

      {/* CREATE PAGE */}
      <div className="bg-gray-800 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">
          ➕ Create Task Page
        </h2>
        <p className="text-gray-300">
          The Create Task page allows users to add a new task.
          Users can enter the task title, description, priority level,
          status, and due date.
          This page is independent and does not depend on any existing task,
          which is why it is directly accessible from the sidebar.
        </p>
      </div>

      {/* READ PAGE */}
      <div className="bg-gray-800 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">
          📖 View Tasks Page (Read Operation)
        </h2>
        <p className="text-gray-300">
          The View Tasks page displays all the tasks created by the user.
          This page represents the Read operation of CRUD.
          From this page, users can view task details and navigate to
          Update or Delete actions for a specific task.
        </p>
      </div>

      {/* UPDATE PAGE */}
      <div className="bg-gray-800 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">
          ✏️ Update Task Page
        </h2>
        <p className="text-gray-300">
          The Update Task functionality is implemented in two steps.
          First, the user selects a task from the Update Tasks page.
          Then, the selected task is opened in the Edit Task page
          with pre-filled data.
          This design ensures that updates are always performed
          on a specific task and avoids ambiguity.
        </p>
      </div>

      {/* DELETE PAGE */}
      <div className="bg-gray-800 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">
          🗑️ Delete Task Page
        </h2>
        <p className="text-gray-300">
          The Delete Task functionality is also implemented in two steps.
          First, the user selects a task from the Delete Tasks page.
          Then, the selected task is shown in a confirmation screen
          before deletion.
          This approach prevents accidental deletion and follows
          safe application design practices.
        </p>
      </div>

      {/* DESIGN JUSTIFICATION */}
      <div className="bg-gray-800 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">
          🧠 Design Justification
        </h2>
        <p className="text-gray-300">
          Each CRUD operation is placed on a separate page to clearly
          demonstrate its functionality.
          Update and Delete operations are task-specific, so they require
          task selection before execution.
          This design mirrors real-world applications and improves
          usability, maintainability, and clarity.
        </p>
      </div>

      {/* FOOTER NOTE */}
      <div className="text-sm text-gray-400">
        <p>
          This project demonstrates structured React development,
          state management using Context API, and clean CRUD architecture,
          making it suitable for academic evaluation and interviews.
        </p>
      </div>

    </div>
  );
};

export default Home;
