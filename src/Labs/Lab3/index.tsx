import VariablesAndConstants from "./VariablesAndConstants.tsx";
import VariableTypes from "./VariableTypes.tsx";
import BooleanVariables from "./BooleanVariables.tsx";
import IfElse from "./IfElse.tsx";
import TernaryOperator from "./TernaryOperator.tsx";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse.tsx";
import ConditionalOutputInline from "./ConditionalOutputInline.tsx";
import LegacyFunctions from "./LegacyFunctions.tsx";
import ArrowFunctions from "./ArrowFunctions.tsx";
import ImpliedReturn from "./ImpliedReturn.tsx";
import TemplateLiterals from "./TemplateLiterals.tsx";
import SimpleArrays from "./SimpleArrays.tsx";
import ArrayIndexAndLength from "./ArrayIndexAndLength.tsx";
import AddingAndRemovingToFromArrays from "./AddingAndRemovingToFromArrays.tsx";
import ForLoops from "./ForLoops.tsx";
import MapFunction from "./MapFunction.tsx";
import FindFunction from "./FindFunction.tsx";
import FindIndex from "./FindIndex.tsx";
import FilterFunction from "./FilterFunction.tsx";
import JsonStringify from "./JsonStringify.tsx";
import House from "./House.tsx";
import TodoItem from "./todo/TodoItem.tsx";
import TodoList from "./todo/TodoList.tsx";
import Spreading from "./Spreading.tsx";
import Destructing from "./Destructing.tsx";
import FunctionDestructing from "./FunctionDestructing.tsx";
import DestructingImports from "./DestructingImports.tsx";
import Classes from "./Classes.tsx";
import Styles from "./Styles.tsx";
import Add from "./Add.tsx";
import Square from "./Square.tsx";
import Highlight from "./Highlight.tsx";
import PathParameters from "./PathParameters.tsx";
import {useSelector} from "react-redux";
import {ListGroup} from "react-bootstrap";

export default function Lab3() {
    console.log('Hello World!')
    const { todos } = useSelector((state: any) => state.todosReducer);
    return (
        <div id={"wd-lab3"} className={"container"}>
            <h2>Lab 3 - JAVASCRIPT</h2>
            <ListGroup>
                {todos.map((todo: any) => (
                    <ListGroup.Item key={todo.id}>
                        {todo.title}
                    </ListGroup.Item>
                ))}
            </ListGroup>
            <VariablesAndConstants />
            <VariableTypes />
            <BooleanVariables />
            <IfElse />
            <TernaryOperator />
            <ConditionalOutputIfElse />
            <ConditionalOutputInline />
            <LegacyFunctions />
            <ArrowFunctions />
            <ImpliedReturn />
            <TemplateLiterals />
            <SimpleArrays />
            <ArrayIndexAndLength />
            <AddingAndRemovingToFromArrays />
            <ForLoops />
            <MapFunction />
            <FindFunction />
            <FindIndex />
            <FilterFunction />
            <JsonStringify />
            <House />
            <TodoItem />
            <TodoList />
            <Spreading />
            <Destructing />
            <FunctionDestructing />
            <DestructingImports />
            <Classes />
            <Styles />
            <Add a={3} b={4} />
            <h4>Square of 4</h4>
            <Square>4</Square><hr/>
            <Highlight>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis cum, dolore esse expedita impedit incidunt inventore laboriosam laborum libero, nam nobis quibusdam repellendus sint tempore ut. Eos quis recusandae sed!
            </Highlight>
            <PathParameters />
        </div>
    );
}