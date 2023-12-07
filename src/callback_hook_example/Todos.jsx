import React, { memo } from 'react'

const Todos = ({ todos, addTodo }) => {
    console.log("child render");
    return (
      <>
        <h4>My Todos</h4>
        <ul>
        {todos.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
        </ul>
        <button onClick={addTodo}>Add Todo</button>
      </>
    );
  };

export default memo(Todos);

