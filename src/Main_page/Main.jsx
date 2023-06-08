import { Outlet } from "react-router-dom";
import Header from "../Component/Sections/Header/Header";
import Footer from "../Component/Sections/Footer/Footer";

const Main = () => {
    return (
        <>
            <Header></Header>
            <Outlet />
            <Footer></Footer>
        </>
    );
};

export default Main;