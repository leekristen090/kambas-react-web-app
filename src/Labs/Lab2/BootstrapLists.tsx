import {Container, FormControl, FormGroup, FormLabel, ListGroup} from "react-bootstrap";

export default function BootstrapLists() {
    return (
        <Container>
            <div id={"wd-css-styling-lists"}>
                <h2>Favorite Movies</h2>
                <ListGroup>
                    <ListGroup.Item active>Aliens</ListGroup.Item>
                    <ListGroup.Item>Terminator</ListGroup.Item>
                    <ListGroup.Item>Blade Runner</ListGroup.Item>
                    <ListGroup.Item>Lord of the Ring</ListGroup.Item>
                    <ListGroup.Item disabled>Star Wars</ListGroup.Item>
                </ListGroup>
            </div>

            <div id={"wd-css-hyperlink-list"}>
                <h3>Favorite Books</h3>
                <FormGroup className={"mb-3"} controlId={"wd-email"}>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl type={"email"} placeholder={"name@example.com"}></FormControl>
                </FormGroup>
                <FormGroup>
                    <FormLabel>Example textarea</FormLabel>
                    <FormControl as={"textarea"} rows={3} ></FormControl>
                </FormGroup>
            </div>
        </Container>
    );
}