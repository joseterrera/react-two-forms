import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

function addTodo(todoList, task = "write tests") {
  const taskInput = todoList.getByLabelText("Task:");
  fireEvent.change(taskInput, {target: { value: task}});
  const submitButton = todoList.getByText("Add a todo!");
  fireEvent.click(submitButton);

}