import {Container, ListGroup} from "react-bootstrap";

export default function BootstrapLists() {
    return (
        <Container>
            <div id={"wd-css-styling-lists"}>
                <h2>Favorite Movies</h2>
                <ListGroup>
                    <ListGroup.Item active>Aliens</ListGroup.Item>
                    <ListGroup.Item>Terminator</ListGroup.Item>
                    <ListGroup.Item>Blade Runner</ListGroup.Item>
                    <ListGroup.Item>Lord of the Rings</ListGroup.Item>
                    <ListGroup.Item disabled>Star Wars</ListGroup.Item>
                </ListGroup>
            </div>

            <div id={"wd-css-hyperlink-list"}>
                <h3>Favorite Books</h3>
                <ListGroup>
                    <ListGroup.Item action active
                                    href={"https://en.wikipedia.org/wiki/Dune_(novel)"}
                                    target={"_blank"}>
                        Dune
                    </ListGroup.Item>
                    <ListGroup.Item action
                                    href={"https://en.wikipedia.org/wiki/The_Lord_of_the_Rings"}
                                    target={"_blank"}>
                        Lord of the Rings
                    </ListGroup.Item>
                    <ListGroup.Item action
                                    href={"https://en.wikipedia.org/wiki/The_Forever_War"}
                                    target={"_blank"}>
                        The Forever War
                    </ListGroup.Item>
                    <ListGroup.Item action
                                    href={"https://en.wikipedia.org/wiki/2001:_A_Space_Odyssey_(novel)"}
                                    target={"_blank"}>
                        2001 A Space Odyssey
                    </ListGroup.Item>
                    <ListGroup.Item action
                                    href={"https://en.wikipedia.org/wiki/Ender%27s_Game"}
                                    target={"_blank"}>
                        Ender's Game
                    </ListGroup.Item>
                    <ListGroup.Item action onClick={() => alert("New book added")}>
                        Add another book
                    </ListGroup.Item>
                </ListGroup>
            </div>
        </Container>
    );
}