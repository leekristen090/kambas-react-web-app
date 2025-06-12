import {Link, useLocation} from "react-router";
import {useSelector} from "react-redux";
import {ListGroup} from "react-bootstrap";

export default function AccountNavigation() {
    const {currentUser} = useSelector((state: any) => state.accountReducer);
    const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
    const {pathname} = useLocation();
    return (
        <ListGroup id={"wd-account-navigation"} className={"wd-list-group fs-5 rounded-0"}>
            {links.map((link) => (
                <div key={link}>
                    <ListGroup.Item key={link} to={`/Kambaz/Account/${link}`} as={Link}
                          className={`list-group-item border border-0 ${pathname.includes(link) ? "active bg-danger" : ""}`}>
                        {link}
                    </ListGroup.Item>
                </div>
            ))}
        </ListGroup>
    );
}