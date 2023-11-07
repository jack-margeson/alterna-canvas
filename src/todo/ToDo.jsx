import "./ToDo.scss";
import TodoItem from "../class-card/TodoItem"

function ToDo({childToParent}) {
    childToParent("Classes");

	return (
        <div className="to-do-container">
            <TodoItem text="CS5001 - HW 3"></TodoItem>
            <TodoItem text="CS5001 - Quiz 3"></TodoItem>
            <TodoItem text="CS5160 - HW 4a"></TodoItem>
            <TodoItem text="CS5160 - HW 4b"></TodoItem>
            <TodoItem text="CS5167 - MON class activity"></TodoItem>
            <TodoItem text="CS5167 - HW 5"></TodoItem>
            <TodoItem text="CS5167 - Midterm 1"></TodoItem>
        </div>
	);
}

export default ToDo;
