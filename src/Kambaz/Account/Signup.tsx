import {Link, useNavigate} from "react-router";
import {FormControl} from "react-bootstrap";
import {useState} from "react";
import {useDispatch} from "react-redux";
import * as client from "./client.ts";
import {setCurrentUser} from "./reducer.ts";

export default function Signup() {
    const [user, setUser] = useState<any>({});
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const signup = async () => {
        const currentUser = await client.signup(user);
        dispatch(setCurrentUser(currentUser));
        navigate("/Kambaz/Account/Profile");
    };
    return (
        <div id={"wd-signup-screen"} className={"wd-margin-right-left"}>
            <h3>Sign up</h3>
            <FormControl placeholder={"username"} type={"text"} id={"wd-username"}
                         className={"mb-2"}
                         onChange={(e) =>
                             setUser({...user, username: e.target.value})} />
            <FormControl placeholder={"password"} type={"password"} id={"password"}
                         className={"mb-2"}
                         onChange={(e) =>
                             setUser({...user, password: e.target.value})} />
            {/*<FormControl placeholder={"verify password"} type={"password"} id={"wd-password-verify"}*/}
            {/*             className={"mb-2"}/>*/}
            {/*<Link to={"/Kambaz/Account/Profile"} className={"btn btn-primary w-100 mb-2"}*/}
            {/*      onClick={signup}>*/}
            {/*    Sign up*/}
            {/*</Link>*/}
            <button onClick={signup} className={"btn btn-primary mb-2 w-100"}
                    id={"wd-signup-button"}>
                Sign Up
            </button>
            <br/>
            <Link to={"/Kambaz/Account/Signin"}>Sign in</Link>
        </div>
    );
}