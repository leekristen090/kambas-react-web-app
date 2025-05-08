import {Link} from "react-router";

export default function Signup() {
    return (
        <div id={"wd-signup-screen"}>
            <h3>Sign up</h3>
            <input placeholder={"username"} className={"wd-username"}/><br/>
            <input placeholder={"password"} type={"password"} className={"password"}/><br/>
            <input placeholder={"verify password"} type={"password"} className={"wd-password-verify"}/><br/>
            <Link to={"/Kambaz/Account/Profile"}>Sign up</Link><br/>
            <Link to={"Kambaz/Account/Signin"}>Sign in</Link>
        </div>
    );
}