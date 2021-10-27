import { useState } from "react";

const TaskAdder = ({ addTask }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    addTask(text.trim());

    setText("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
};

export default TaskAdder;
