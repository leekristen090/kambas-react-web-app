import {Button, FormControl, ListGroup} from "react-bootstrap";

export default function TodoForm({ todo, setTodo, addTodo, updateTodo }: {
    todo: { id: string, title: string };
    setTodo: (todo: { id: string, title: string }) => void;
    addTodo: (todo: { id: string, title: string }) => void;
    updateTodo: (todo: { id: string, title: string }) => void;
}) {
    return (
        <ListGroup.Item>
            <Button onClick={() => addTodo(todo)} id={"wd-add-todo-click"} className={"btn-success m-1 float-end"}>
                Add
            </Button>
            <Button onClick={() => updateTodo(todo)} id={"wd-update-todo-click"} className={"btn-warning m-1 float-end"}>
                Update
            </Button>
            <FormControl
                value={todo.title}
                onChange={(e) => setTodo({ ...todo, title: e.target.value })}
                className={"w-50 float-start"}/>
        </ListGroup.Item>
    );
}