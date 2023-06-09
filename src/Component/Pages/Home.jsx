import DynamicTitle from "../../DynamicTitle/DynamicTitle";
import Banner_Section from "../Sections/Banner_Section/Banner_Section";
import Popular_instructor from "../Sections/Popular_instractor/Popular_instractor";


const Home = () => {
    DynamicTitle("Home")

    return (
        <>
          <Banner_Section></Banner_Section>
          <Popular_instructor></Popular_instructor>
        </>
    );
};

export default Home;