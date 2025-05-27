import ClickEvent from "./ClickEvent.tsx";
import PassingDataOnEvent from "./PassingDataOnEvent.tsx";
import PassingFunctions from "./PassingFunctions.tsx";
import EventObject from "./EventObject.tsx";

export default function Lab4() {
    function sayHello() {
        alert("Hello");
    }
    return (
        <div id={"wd-lab4"} className={"container"}>
            <h2>Lab 4</h2>
            <ClickEvent />
            <PassingDataOnEvent />
            <PassingFunctions theFunction={sayHello} />
            <EventObject />
        </div>
    );
}