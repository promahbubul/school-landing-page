import SectionTitle from "../../shared/ui/SectionTitle";
import Slider from "react-slick";

import RightArea from "./RightArea";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LeftArea from "./leftArea";


const Review = () => {
  return (
    <section className="mt-24">
      <SectionTitle className={"text-center"} title={"Reviews"} />
      <div className="flex flex-col md:flex-row gap-9">
        <LeftArea />
        <RightArea Slider={Slider} />
      </div>
    </section>
  );
};
export default Review;
