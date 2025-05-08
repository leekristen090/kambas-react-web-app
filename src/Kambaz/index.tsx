import {Routes, Route, Navigate} from "react-router-dom";
import Account from "./Account";
import Dashboard from "./Dashboard.tsx";

export default function Kambaz() {
    return(
        <div id={"wd-kambaz"}>
            <h1>Kambaz</h1>
            <Routes>
                <Route path={"/"} element={<Navigate to={"Account"}/> } />
                <Route path={"/Account/*"} element={<Account />} />
                <Route path={"/Dashboard"} element={<Dashboard />} />
            </Routes>
        </div>
    );
}