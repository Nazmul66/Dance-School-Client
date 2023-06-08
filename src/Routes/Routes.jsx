import { createBrowserRouter } from "react-router-dom";
import Main from "../Main_page/Main";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <div>hello</div>,
        children: [
            {
                path: "/",

            }
        ]
    }
])

export default router