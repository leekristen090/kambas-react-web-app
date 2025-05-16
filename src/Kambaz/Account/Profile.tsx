import {Link} from "react-router";
import {Form, FormControl, FormSelect} from "react-bootstrap";

export default function Profile() {
    return (
        <div id={"wd-profile-screen"} className={"wd-margin-right-left"}>
            <h3>Profile</h3>
            <FormControl defaultValue={"alice"} placeholder={"username"} type={"text"}
                         id={"wd-username"} title={"Username"} className={"mb-2"}/>
            <FormControl defaultValue={"123"} placeholder={"password"} type={"password"}
                         id={"wd-password"} title={"Password"} className={"mb-2"}/>
            <FormControl defaultValue={"Alice"} placeholder={"First Name"} type={"text"}
                         id={"wd-first-name"} title={"First Name"} className={"mb-2"}/>
            <FormControl defaultValue={"Wonderland"} placeholder={"Last Name"} type={"text"}
                         id={"wd-last-name"} title={"Last Name"} className={"mb-2"}/>
            <FormControl defaultValue={"2000-01-01"} type={"date"} id={"wd-dob"} title={"Date of Birth"}
            className={"mb-2"}/>
            <FormControl defaultValue={"alice@wonderland"} type={"email"}
                         id={"wd-email"} title={"Email Address"} className={"mb-2"}/>
            <FormSelect defaultValue={"FACULTY"} id={"wd-role"} title={"Role"} className={"mb-2"}>
                <option value={"USER"}>User</option>
                <option value={"ADMIN"}>Admin</option>
                <option value={"FACULTY"}>Faculty</option>
                <option value={"STUDENT"}>Student</option>
            </FormSelect>
            <Link to={"/Kambaz/Account/Signin"} className={"btn btn-primary w-100 mb-2 bg-danger text-white"}>Sign Out</Link>
        </div>
    );
}