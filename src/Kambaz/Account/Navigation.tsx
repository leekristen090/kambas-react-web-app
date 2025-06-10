import {Link, useLocation} from "react-router";
import {useSelector} from "react-redux";

export default function AccountNavigation() {
    const {currentUser} = useSelector((state: any) => state.accountReducer);
    const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
    const {pathname} = useLocation();
    return (
        <div id={"wd-account-navigation"}>
            {links.map((link) => (
                <div key={link}>
                    <Link to={`/Kambaz/Account/${link}`}
                          className={`btn btn-secondary mb-2 ${pathname.includes(link) ? "active" : ""}`}>
                        {link}
                    </Link>
                </div>
            ))}
        </div>
    );
}