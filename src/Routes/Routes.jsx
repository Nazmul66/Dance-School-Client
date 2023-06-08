import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <div>hello</div>,
    }
])

export default router