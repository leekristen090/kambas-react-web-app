import {Link} from "react-router";
import {FormControl} from "react-bootstrap";

export default function Signin() {
    return (
        <div id={"wd-signin-screen"} className={"wd-margin-right-left"}>
            <h3>Sign in</h3>
            <FormControl placeholder={"username"} id={"wd-username"} className={"mb-2"}/>
            <FormControl placeholder={"password"} type={"password"} id={"wd-password"} className={"mb-2"}/>
            <Link to={"/Kambaz/Dashboard"} id={"wd-signin-btn"} className={"btn btn-primary w-100 mb-2"}>Sign in</Link>
            <Link to={"/Kambaz/Account/Signup"} id={"wd-signup-link"}>Sign up</Link>
        </div>
    );
}