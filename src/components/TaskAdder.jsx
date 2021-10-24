import { useState } from "react";

const TaskAdder = ({ addTask }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(text);
    addTask(text);

    setText("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input type="submit" name="Add" />
    </form>
  );
};

export default TaskAdder;
