import {useNavigate} from "react-router";
import {FormControl, FormSelect} from "react-bootstrap";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentUser} from "./reducer.ts";
import * as client from "./client.ts";

export default function Profile() {
    const [profile, setProfile] = useState<any>({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const updateProfile = async () => {
        const updatedProfile = await client.updateUser(profile);
        dispatch(setCurrentUser(updatedProfile));
    };
    const fetchProfile = () => {
        if (!currentUser) return navigate("/Kambaz/Account/Signin");
        setProfile(currentUser);
    };
    const signout = async () => {
        await client.signout();
        dispatch(setCurrentUser(null));
        navigate("/Kambaz/Account/Signin");
    };
    useEffect(() => { fetchProfile(); }, []);
    return (
        <div id={"wd-profile-screen"} className={"wd-margin-right-left"}>
            <h3>Profile</h3>
            <FormControl defaultValue={profile.username} placeholder={"username"} type={"text"}
                         id={"wd-username"} title={"Username"} className={"mb-2"}
                         onChange={(e) => setProfile({...profile, username: e.target.value})}/>
            <FormControl defaultValue={profile.password} placeholder={"password"} type={"password"}
                         id={"wd-password"} title={"Password"} className={"mb-2"}
                         onChange={(e) => setProfile({...profile, password: e.target.value})}/>
            <FormControl defaultValue={profile.firstName} placeholder={"First Name"} type={"text"}
                         id={"wd-first-name"} title={"First Name"} className={"mb-2"}
                         onChange={(e) => setProfile({...profile, firstName: e.target.value})} />
            <FormControl defaultValue={profile.lastName} placeholder={"Last Name"} type={"text"}
                         id={"wd-last-name"} title={"Last Name"} className={"mb-2"}
                         onChange={(e) => setProfile({...profile, lastName: e.target.value})}/>
            <FormControl defaultValue={profile.dob} type={"date"} id={"wd-dob"} title={"Date of Birth"}
            className={"mb-2"} onChange={(e) => setProfile({...profile, dob: e.target.value})}/>
            <FormControl defaultValue={profile.email} type={"email"} placeholder={"Email"}
                         id={"wd-email"} title={"Email Address"} className={"mb-2"}
                         onChange={(e) => setProfile({...profile, email: e.target.value})}/>
            <FormSelect defaultValue={profile.role} id={"wd-role"} title={"Role"} className={"mb-2"}
                        onChange={(e) => setProfile({...profile, role: e.target.value})}>
                <option value={"USER"}>User</option>
                <option value={"ADMIN"}>Admin</option>
                <option value={"FACULTY"}>Faculty</option>
                <option value={"STUDENT"}>Student</option>
            </FormSelect>
            <button onClick={updateProfile} className="btn btn-primary w-100 mb-2">Update</button>
            {/*<Link to={"/Kambaz/Account/Signin"}*/}
            {/*      className={"btn btn-primary w-100 mb-2 bg-danger text-white"} onClick={signout}>*/}
            {/*    Sign Out*/}
            {/*</Link>*/}
            <button onClick={signout} className={"btn btn-danger w-100 mb-2 text-white"}>
                Sign Out
            </button>
        </div>
    );
}