import Signin from "./Signin.tsx";
import Profile from "./Profile.tsx";
import Signup from "./Signup.tsx";
import {Navigate, Route, Routes} from "react-router-dom";
import AccountNavigation from "./Navigation.tsx";
import {useSelector} from "react-redux";

export default function Account() {
    const {currentUser} = useSelector((state: any) => state.accountReducer);
    return (
        <div id={"wd-account-screen"}>
            <table>
                <tr>
                    <td valign={"top"}> <AccountNavigation /> </td>
                    <td valign={"top"}>
                        <Routes>
                            <Route path={"/"}
                                   element={<Navigate to={currentUser ? "/Kambaz/Account/Profile" : "/Kambaz/Account/Signin"}/>} />
                            <Route path={"/Signin"} element={<Signin />} />
                            <Route path={"/Profile"} element={<Profile />} />
                            <Route path={"/Signup"} element={<Signup />} />
                        </Routes>
                    </td>
                </tr>
            </table>
        </div>
    );
}