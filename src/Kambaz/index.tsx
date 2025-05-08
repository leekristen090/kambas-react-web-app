import {Routes, Route, Navigate} from "react-router-dom";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation.tsx";

export default function Kambaz() {
    return(
        <div id={"wd-kambaz"}>
            <table>
                <tr>
                    <td valign={"top"}><KambazNavigation/></td>
                    <td valign={"top"}>
                        <Routes>
                            <Route path={"/"} element={<Navigate to={"Account"}/> } />
                            <Route path={"/Account/*"} element={<Account />} />
                            <Route path={"/Dashboard"} element={<Dashboard />} />
                        </Routes>
                    </td>
                </tr>
            </table>
        </div>
    );
}