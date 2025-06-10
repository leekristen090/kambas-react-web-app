import {Routes, Route, Navigate} from "react-router-dom";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation.tsx";
import Courses from "./Courses";
import "./styles.css";
import ProtectedRoute from "./Account/ProtectedRoute.tsx";
import EnrollProtectedRoute from "./Enrollments/ProtectedRoute.tsx";
import Session from "./Account/Session.tsx";
import * as userClient from "./Account/client.ts";
import * as courseClient from "./Courses/client.ts";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

export default function Kambaz() {
    const [courses, setCourses] = useState<any[]>([]);
    const [course, setCourse] = useState<any>({
        _id: "0",
        name: "New Course",
        number: "New Number",
        startDate: "2023-09-10",
        endDate: "2023-12-15",
        image: "/images/reactjs.jpg",
        description: "New Description",
    });
    const {currentUser} = useSelector((state: any) => state.accountReducer);
    const fetchCourses = async () => {
      try {
          const courses = await courseClient.fetchAllCourses();
          // const courses = await userClient.findMyCourses();
          setCourses(courses);
      } catch (error) {
          console.log(error);
      }
    };
    useEffect(() => {
        fetchCourses();
    }, [currentUser]);
    const addNewCourse = async () => {
        const newCourse = await userClient.createCourse(course);
        setCourses([...courses, newCourse]);
    };
    const deleteCourse = async (courseId: string) => {
        // const status = await courseClient.deleteCourse(courseId);
        await courseClient.deleteCourse(courseId);
        setCourses(courses.filter((course) => course._id !== courseId));
    };
    const updateCourse = async () => {
        await courseClient.updateCourse(course);
        setCourses(courses.map((c) => {
            if (c._id === course._id) {return course;}
            else {return c;}
        }));
    };

    return(
        <Session>
            <div id={"wd-kambaz"}>
                <KambazNavigation />
                <div className={"wd-main-content-offset p-3"}>
                    <Routes>
                        <Route path={"/"} element={<Navigate to={"Account"}/> } />
                        <Route path={"/Account/*"} element={<Account />} />
                        <Route path={"/Dashboard"} element={
                            <ProtectedRoute>
                                <Dashboard
                                    courses={courses}
                                    course={course}
                                    setCourse={setCourse}
                                    addNewCourse={addNewCourse}
                                    deleteCourse={deleteCourse}
                                    updateCourse={updateCourse}
                                />
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
        </Session>
    );
}