import Signin from "./Signin.tsx";
import Profile from "./Profile.tsx";
import Signup from "./Signup.tsx";
import {Navigate, Route, Routes} from "react-router-dom";

export default function Account() {
    return (
        <div id={"wd-account-screen"}>
            <h2>Account</h2>
            <Routes>
                <Route path={"/"} element={<Navigate to={"/Kambaz/Account/Signin"}/>} />
                <Route path={"/Signin"} element={<Signin />} />
                <Route path={"/Profile"} element={<Profile />} />
                <Route path={"/Signup"} element={<Signup />} />
            </Routes>
        </div>
    );
}