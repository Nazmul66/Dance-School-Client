import { createBrowserRouter } from "react-router-dom";
import Main from "../Main_page/Main";
import LoginPage from "../Component/Sections/LoginPage/LoginPage";
import RegisterPage from "../Component/Sections/RegisterPage/RegisterPage";
import Home from "../Component/Pages/Home";
import ErrorElement from "../ErrorElement/ErrorElement";
import Dashboard from "../Dashboard/Dashboard";
import ClassPages from "../Component/Pages/ClassPages";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import Select_classes from "../Component/Dashboard_Element/Select_classes/Select_classes";
import ManageUsers from "../Component/Dashboard_Element/ManageUsers/ManageUsers";
import AddClass from "../Component/Dashboard_Element/AddClass/AddClass";
// import Payment from "../Component/Dashboard_Element/Payment/Payment";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/classPage",
                element: <ClassPages></ClassPages>
            },
            {
                path: '/login',
                element: <LoginPage></LoginPage>
            },
            {
                path: '/register',
                element: <RegisterPage></RegisterPage>
            }
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        children: [
            {
                path: "/dashboard/select_class",
                element: <Select_classes></Select_classes>
            },
            {
                path: "/dashboard/payment/:id",
                // element: <Payment></Payment>,
            },
            {
                path: "/dashboard/Manage_users",
                element: <ManageUsers></ManageUsers>
            },
            {
                path: "/dashboard/addClass",
                element: <AddClass></AddClass>
            }
        ]
    }
])

export default router