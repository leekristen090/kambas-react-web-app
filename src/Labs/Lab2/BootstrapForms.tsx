import {Container, FormControl, FormGroup, FormLabel} from "react-bootstrap";

export default function BootstrapForms() {
    return (
        <Container>
            <div id={"wd-css-styling-forms"}>
                <h3>Forms</h3>
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