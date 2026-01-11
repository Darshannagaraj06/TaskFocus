import { useState } from "react";

export default function Taskform({ addTask }) {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("Low");
  const [category, setCategory] = useState("Work");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTask({ text, priority, category, completed: false });
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Enter task"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Other">Other</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
}