import {ListGroup} from "react-bootstrap";
import TodoForm from "./TodoForm.tsx";
import TodoItem from "./TodoItem.tsx";
import { useSelector } from "react-redux";
export default function TodoList() {
    const { todos } = useSelector((state: any) => state.todosReducer);
    return (
        <div id="wd-todo-list-redux" className={"w-50"}>
            <h2>Todo List</h2>
            <ListGroup>
                <TodoForm />
                {todos.map((todo: any) => (
                    <TodoItem todo={todo} />
                ))}
            </ListGroup>
            <hr/>
        </div>
    );}
