import SectionTitle from "../../shared/ui/SectionTitle";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
  underline,
} from "../../../assets/icons";
import reviewsData from "../../../constant/home/reviews.constant";
import { useRef } from "react";

const Review = () => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="mt-24">
      <SectionTitle className={"text-center"} title={"Reviews"} />
      <div className="flex flex-col md:flex-row gap-9">
        <div className="w-full md:w-4/12  flex items-end flex-row md:flex-col gap-6 md:gap-0">
          <div className="text-2xl md:text-2xl md:text-[48px]  relative text-black font-bold font-open-sans">
            <h1 className="md:leading-normal">
              What our <span className="text-green">Students</span> say about us
            </h1>
            <img
              src={underline}
              alt=""
              className="absolute top-16 w-32 left-0 md:left-auto md:w-auto md:top-[135px]"
            />
          </div>
          <div className="mt-14 flex flex-row gap-6 md:gap-12">
            <button
              onClick={previous}
              className="bg-white  text-green hover:text-white border hover:bg-green shadow-md shadow-slate-400 border-green duration-500 p-5 rounded-full"
            >
              <MdOutlineArrowBackIos />
            </button>
            <button
              onClick={next}
              className="bg-white  text-green hover:text-white border hover:bg-green shadow-md shadow-slate-400 border-green duration-500 p-5 rounded-full"
            >
              <MdOutlineArrowForwardIos />
            </button>
          </div>
        </div>
        <div className="w-full md:w-8/12">
          <Slider
            ref={(slider) => {
              sliderRef = slider;
            }}
            {...settings}
          >
            {reviewsData.map(({ designation, id, img, name, comment }) => (
              <div key={id} className="pl-5 py-2 -translate-x-3">
                <div className="shadow-md rounded-md  px-12 pb-12 pt-16">
                  <div className="flex flex-row gap-4 items-center">
                    <img src={img} alt="" className="" />
                    <div className="">
                      <h4 className="">{name}</h4>
                      <h5 className="">{designation}</h5>
                    </div>
                  </div>
                  <p className="mt-6">{comment}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};
export default Review;
