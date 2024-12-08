import React, { useState } from "react";

function NewTasks({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(e) {
    setEnteredTask(e.target.value);
  }
  function handleAddClick() {
    if (enteredTask.trim() === "") {
      return;
    }
    onAdd(enteredTask);
    setEnteredTask("");
  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={handleChange}
        value={enteredTask}
      />
      <button
        className="text-stone-700 hover:text-stone-900"
        onClick={handleAddClick}
      >
        Add Task
      </button>
    </div>
  );
}

export default NewTasks;
