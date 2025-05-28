import {Button, ListGroup} from "react-bootstrap";

export default function TodoItem({ todo, deleteTodo, setTodo }: {
    todo: { id: string; title: string };
    deleteTodo: (id: string) => void;
    setTodo: (todo: { id: string; title: string }) => void;
}) {
    return (
        <ListGroup.Item key={todo.id} className={"align-content-center"}>
            <Button onClick={() => deleteTodo(todo.id)} id={"wd-delete-todo-click"}
                    className={"btn-danger m-1 float-end"}>
                Delete
            </Button>
            <Button onClick={() => setTodo(todo)} id={"wd-set-todo-click"}
                    className={"btn-primary m-1 float-end"}>
                Edit
            </Button>
            {todo.title}
        </ListGroup.Item>
    );
}