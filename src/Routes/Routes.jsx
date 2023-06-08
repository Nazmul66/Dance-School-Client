import { createBrowserRouter } from "react-router-dom";
import Main from "../Main_page/Main";
import LoginPage from "../Component/Sections/LoginPage/LoginPage";
import RegisterPage from "../Component/Sections/RegisterPage/RegisterPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <div>hello</div>,
        children: [
            {
                path: "/",
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
    }
])

export default router