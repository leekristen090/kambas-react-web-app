import {Link} from "react-router";
import {useLocation} from "react-router";
import {Nav} from "react-bootstrap";

export default function TOC() {
    const {pathname} = useLocation();
    return(
        <Nav variant={"pills"} id={"wd-toc"}>
            <Nav.Item>
                <Nav.Link to={"/Labs/Lab1"} as={Link}
                          active={pathname.includes("Lab1")}>Lab 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link to={"/Labs/Lab2"} as={Link}
                          active={pathname.includes("Lab2")}>Lab 2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link to={"/Labs/Lab3"} as={Link}
                          active={pathname.includes("Lab3")}>Lab 3</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link to={"/Labs/Lab4"} as={Link}
                          active={pathname.includes("Lab4")}>Lab 4</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link to={"/Kambaz"} as={Link}>Kambaz</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link id={"wd-github"}
                          href={"https://github.com/leekristen090/kambas-react-web-app"}
                          target={"_blank"}>My GitHub</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}