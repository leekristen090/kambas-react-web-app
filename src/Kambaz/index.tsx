import {Routes, Route, Navigate} from "react-router-dom";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation.tsx";
import Courses from "./Courses";
import "./styles.css";
import ProtectedRoute from "./Account/ProtectedRoute.tsx";
import EnrollProtectedRoute from "./Enrollments/ProtectedRoute.tsx";

export default function Kambaz() {
    return(
        <div id={"wd-kambaz"}>
            <KambazNavigation />
            <div className={"wd-main-content-offset p-3"}>
                <Routes>
                    <Route path={"/"} element={<Navigate to={"Account"}/> } />
                    <Route path={"/Account/*"} element={<Account />} />
                    <Route path={"/Dashboard"} element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    } />
                    <Route path={"/Courses/:cid/*"} element={
                        <EnrollProtectedRoute>
                            <Courses />
                        </EnrollProtectedRoute>
                    } />
                    <Route path={"/Calendar"} element={<h1>Calendar</h1>} />
                    <Route path={"/Inbox"} element={<h1>Inbox</h1>} />
                </Routes>
            </div>
        </div>
    );
}