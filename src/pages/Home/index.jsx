import Banner from "../../components/Home/Banner";
import Footer from "../../components/Home/Footer";
import FristStep from "../../components/Home/FristStep";
import IconsGroup from "../../components/Home/IconsGroup";
import Instructors from "../../components/Home/Instructors";
import JobOpportunities from "../../components/Home/JobOpertuinties";
import Navbar from "../../components/Home/Navbar";
import NewSkills from "../../components/Home/NewSkills";
import PopularCourses from "../../components/Home/PopularCourses";
import Review from "../../components/Home/Review";
import TopCategories from "../../components/Home/TopCategories";

const Home = () => {
  return (
    <div className="">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 md:px-5">
        <Navbar />
        <Banner />
        <IconsGroup />
        <TopCategories />
        <PopularCourses />
        <NewSkills />
        <JobOpportunities />
        <Review />
        <Instructors />
      </div>
      <FristStep />
      <Footer />
    </div>
  );
};
export default Home;
