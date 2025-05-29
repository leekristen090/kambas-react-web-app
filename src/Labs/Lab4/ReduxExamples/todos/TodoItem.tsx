import {Button, ListGroup} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

// @ts-ignore
export default function TodoItem({ todo,}) {
    const dispatch = useDispatch();
    return (
        <ListGroup.Item key={todo.id} className={"align-content-center"}>
            <Button onClick={() => dispatch(deleteTodo(todo.id))}
                    id="wd-delete-todo-click" className={"btn-danger m-1 float-end"}>
                Delete
            </Button>
            <Button onClick={() => dispatch(setTodo(todo))}
                    id="wd-set-todo-click" className={"btn-primary m-1 float-end"}>
                Edit
            </Button>
            {todo.title}
        </ListGroup.Item>
    );}
