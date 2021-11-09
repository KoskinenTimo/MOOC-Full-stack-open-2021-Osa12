import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Todo from "./Todo";

test('Todo component renders content', () => {
  const todo =  {
    done: true,
    text: "Write code",
    _id: "61884b726547d134a63593e1"
  };

  const deleteHandler = jest.fn();
  const doneHandler = jest.fn();

  const todoComponent = render(
    <Todo 
      todo={todo}
      onClickDelete={deleteHandler}
      onClickComplete={doneHandler}
    />
  );

  const todoText = todoComponent.container.querySelector('#todo-text');
  expect(todoText).toHaveTextContent('Write code');
})