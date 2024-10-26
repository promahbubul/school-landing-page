import coursesData from "../../../../constant/home/courses.constant";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "../../../../assets/icons";
import { useRef } from "react";

const CategorySlider = () => {
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
    slidesToShow: 4,
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
    <div className="mt-14 gap-8 slider-container relative">
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
      >
        {/* Card 1 */}
        {coursesData.map(({ description, id, img, title }) => (
          <div className="md:pl-8  h-full" key={id}>
            <div className="relative group  overflow-hidden h-full cursor-pointer">
              <div className="bg-black/50 absolute inset-0"></div>
              <img
                src={img}
                alt={title}
                className="object-cover w-full h-full"
              />
              {/* information */}
              <div className="absolute group-hover:bottom-0 pb-3 transition-all duration-300 -bottom-60 px-4">
                <p className="text-white z-20 text-[28px] font-semibold font-poppins">
                  {title}
                </p>
                <p className="text-white mt-5 leading-normal text-base font-normal font-poppins">
                  {description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      {/* Slider Arrow */}
      <div className="  flex flex-row items-center justify-between -translate-y-1/2 top-1/2  absolute w-full ">
        <button
          onClick={previous}
          className="bg-white relative left-10 text-green hover:text-white hover:bg-green duration-500 p-5 rounded-full"
        >
          <MdOutlineArrowBackIos />
        </button>
        <button
          onClick={next}
          className="bg-white relative right-5 text-green hover:text-white hover:bg-green duration-500 p-5 rounded-full"
        >
          <MdOutlineArrowForwardIos />
        </button>
      </div>
    </div>
  );
};
export default CategorySlider;
