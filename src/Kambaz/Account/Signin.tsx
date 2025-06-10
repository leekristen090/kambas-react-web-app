import {Link, useNavigate} from "react-router";
import {Button, FormControl} from "react-bootstrap";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {setCurrentUser} from "./reducer";
import * as client from "./client";
// import * as db from "../Database";

export default function Signin() {
    const [credentials, setCredentials] = useState<any>({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const signin = async () => {
        const user =  await client.signin(credentials);
        // const user = db.users.find(
        //     (u: any) => u.username === credentials.username && u.password === credentials.password);
        if (!user) return;
        dispatch(setCurrentUser(user));
        navigate("/Kambaz/Dashboard");
    };

    return (
        <div id={"wd-signin-screen"} className={"wd-margin-right-left"}>
            <h3>Sign in</h3>
            <FormControl placeholder={"username"} id={"wd-username"} className={"mb-2"}
                         defaultValue={credentials.username}
                         onChange={(e) => setCredentials({...credentials, username: e.target.value})} />
            <FormControl placeholder={"password"} type={"password"} id={"wd-password"} className={"mb-2"}
                         defaultValue={credentials.password}
                         onChange={(e) => setCredentials({...credentials, password: e.target.value})}/>
            <Button onClick={signin} id={"wd-signin-btn"} className={"btn btn-primary w-100 mb-2"}>
                Sign in
            </Button>
            <Link to={"/Kambaz/Account/Signup"} id={"wd-signup-link"}>Sign up</Link>
        </div>
    );
}