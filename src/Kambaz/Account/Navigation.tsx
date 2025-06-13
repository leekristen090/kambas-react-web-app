import {Link, useLocation} from "react-router";
import {useSelector} from "react-redux";
import {ListGroup} from "react-bootstrap";

export default function AccountNavigation() {
    const {currentUser} = useSelector((state: any) => state.accountReducer);
    // const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
    const {pathname} = useLocation();
    const active = (path: string) => (pathname.includes(path) ? "border-start border-black border-3 text-black" : "text-danger");
    return (
        <div id={"wd-account-navigation"} className={"wd-list-group"}>
            {/*{links.map((link) => (*/}
            {/*    <ListGroup key={link}>*/}
            {/*        <ListGroup.Item key={link} to={`/Kambaz/Account/${link}`} as={Link}*/}
            {/*              className={`list-group-item border border-0 ${pathname.includes(link) ? "border-start border-black border-3 text-black" : "text-danger"}`}>*/}
            {/*            {link}*/}
            {/*        </ListGroup.Item>*/}
            
            {/*    </ListGroup>*/}
            {/*))}*/}
            {/*{currentUser && currentUser === "ADMIN" && (*/}
            {/*    <ListGroup.Item>*/}
            {/*        <Link to={"/Kambaz/Account/Users"} className={`list-group-item ${active("Users")}`}>Users</Link>*/}
            {/*    </ListGroup.Item>*/}
            {/*)}*/}
            <ListGroup className={"fs-5"}>
                {!currentUser && (
                    <>
                        <Link to={"/Kambaz/Account/Signin"}
                              className={`list-group-item border border-0 ${pathname.includes("Signin") ? "border-start border-black border-3 text-black" : "text-danger"}`}>
                            Sign In
                        </Link><br/>
                    </>
                )}
                {!currentUser && (
                    <>
                        <Link to={`/Kambaz/Account/Signup`}
                              className={`list-group-item border border-0 ${pathname.includes("Signup") ? "border-start border-black border-3 text-black" : "text-danger"}`}>
                            Sign Up
                        </Link> <br />
                    </>
                )}
                {currentUser && (
                    <>
                        <Link to={`/Kambaz/Account/Profile`} className={`list-group-item border border-0 ${pathname.includes("Profile") ? "border-start border-black border-3 text-black" : "text-danger"}`}>Profile</Link> <br />
                    </>
                )}

                {currentUser && currentUser.role === "ADMIN" && (
                    <Link
                        to={`/Kambaz/Account/Users`}
                        className={`list-group-item border border-0 ${active("Users")}`}>
                        Users
                    </Link>
                )}
            </ListGroup>
        </div>
    );
}