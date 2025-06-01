import {useSelector} from "react-redux";

export default function AuthCheck() {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    return {
        currentUser,
        isFaculty: currentUser?.role === "FACULTY",
    };

}