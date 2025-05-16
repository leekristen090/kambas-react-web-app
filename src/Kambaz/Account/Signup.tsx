import {Link} from "react-router";
import {FormControl} from "react-bootstrap";

export default function Signup() {
    return (
        <div id={"wd-signup-screen"} className={"wd-margin-right-left"}>
            <h3>Sign up</h3>
            <FormControl placeholder={"username"} type={"text"} id={"wd-username"} className={"mb-2"}/>
            <FormControl placeholder={"password"} type={"password"} id={"password"} className={"mb-2"}/>
            <FormControl placeholder={"verify password"} type={"password"} id={"wd-password-verify"} className={"mb-2"}/>
            <Link to={"/Kambaz/Account/Profile"} className={"btn btn-primary w-100 mb-2"}>Sign up</Link><br/>
            <Link to={"/Kambaz/Account/Signin"}>Sign in</Link>
        </div>
    );
}