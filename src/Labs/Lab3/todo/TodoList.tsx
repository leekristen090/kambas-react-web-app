import {ListGroup} from "react-bootstrap";
import TodoItem from "./TodoItem.tsx";
import todos from "./todos.json";

export default function TodoList() {
    return (
        <>
            <h3>Todo list</h3>
            <ListGroup>
                {todos.map(todo =>{
                    return(<TodoItem todo={todo} />)
                })}
            </ListGroup> <hr />
        </>
    );
}