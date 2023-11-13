import "./ToDo.scss";
import * as React from "react";
import TodoItem from "../class-card/TodoItem";
import Button from "@mui/material/Button";

function ToDo({ childToParent }) {
	childToParent("Classes");

	if (!localStorage.getItem("todoItems")) {
		localStorage.setItem("todoItems", JSON.stringify([]));
	}

	let [todoItems, setTodoItems] = React.useState(
		JSON.parse(localStorage.getItem("todoItems"))
	);

	let clearTodo = () => {
		setTodoItems([]);
		localStorage.setItem("todoItems", JSON.stringify([]));
	};

	let addTodo = () => {
		let tmpTodo = todoItems;
		let todoText = prompt("Enter to-do item text:");
		setTodoItems((currItems) => [...currItems, todoText]);
		localStorage.setItem("todoItems", JSON.stringify([...tmpTodo, todoText]));
	};

	let todoList = todoItems;

	return (
		<div className="to-do-container">
			<div className="todo-buttons">
				<Button variant="contained" onClick={addTodo}>
					Add To-do item
				</Button>
				<Button variant="contained" onClick={clearTodo}>
					Clear to-do list
				</Button>
			</div>
			<div>
				{todoList.length <= 0 ? <p>No to-do items. Add one above!</p> : " "}
				{todoList.map((todoItem, index) => (
					<TodoItem key={index} text={todoItem}></TodoItem>
				))}
			</div>
		</div>
	);
}

export default ToDo;
