import { useRef } from "react";
import SectionTitle from "../../shared/ui/SectionTitle";
import Slider from "react-slick";
import LeftArea from "./leftArea";
import RightArea from "./RightArea";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Review = () => {
  let sliderRef = useRef(null);
  const next = () => {
    // sliderRef.slickNext();
    console.log("first");
    console.log(sliderRef);
  };
  const previous = () => {
    // sliderRef.slickPrev();
    console.log("last");
  };
  // console.log(sliderRef);
  return (
    <section className="mt-24">
      <SectionTitle className={"text-center"} title={"Reviews"} />
      <div className="flex flex-row gap-9">
        <LeftArea next={next} previous={previous} />
        <RightArea sliderRef={sliderRef} Slider={Slider} />
      </div>
    </section>
  );
};
export default Review;
