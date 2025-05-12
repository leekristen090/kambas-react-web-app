import {Link} from "react-router";

export default function Profile() {
    return (
        <div id={"wd-profile-screen"}>
            <h3>Profile</h3>
            <input defaultValue={"alice"} placeholder={"username"} type={"text"} className={"wd-username"} title={"Username"}/><br/>
            <input defaultValue={"123"} placeholder={"password"} type={"password"} className={"wd-password"} title={"Password"}/><br/>
            <input defaultValue={"Alice"} placeholder={"First Name"} type={"text"} id={"wd-first-name"} title={"First Name"}/><br/>
            <input defaultValue={"Wonderland"} placeholder={"Last Name"} type={"text"} id={"wd-last-name"} title={"Last Name"}/><br/>
            <input defaultValue={"2000-01-01"} type={"date"} id={"wd-dob"} title={"Date of Birth"}/> <br/>
            <input defaultValue={"alice@wonderland"} type={"email"} id={"wd-email"} title={"Email Address"}/><br/>
            <select defaultValue={"FACULTY"} id={"wd-role"} title={"Role"}>
                <option value={"USER"}>User</option>
                <option value={"ADMIN"}>Admin</option>
                <option value={"FACULTY"}>Faculty</option>
                <option value={"STUDENT"}>Student</option>
            </select><br/>
            <Link to={"/Kambaz/Account/Signin"}>Sign Out</Link>
        </div>
    );
}