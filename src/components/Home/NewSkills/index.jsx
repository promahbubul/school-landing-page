import newSkillData from "../../../constant/home/newSkill.constant";
import SectionTitle from "../../shared/ui/SectionTitle";
import {
  FaRegStar,
  GoPeople,
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "../../../assets/icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";

const NewSkills = () => {
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
    slidesToShow: 3,
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
      <SectionTitle title={"Learn a new skill in two  hours"} />
      <div className="mt-12 relative ">
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          {newSkillData.map(
            ({ id, img, price, rating, students, time, title }) => (
              <div key={id} className="pl-8 pb-2 -translate-x-8">
                <div className="rounded-xl transition-all duration-500 hover:-translate-y-5 shadow-md drop-shadow cursor-pointer bg-white">
                  <div className="w-full">
                    <img
                      src={img}
                      alt=""
                      className="rounded-t-xl w-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex flex-row items-start justify-between">
                      <h1 className="text-2xl font-medium text-dark2 leading-normal">
                        {title}
                      </h1>
                      <div className="flex flex-row items-center gap-1">
                        <FaRegStar className="text-green" />
                        <span className="text-black text-base font-poppins">
                          {rating}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                      <div className="flex flex-row items-center gap-4 text-base font-medium text-dark2">
                        <p className="">{time}</p>
                        <div className="flex flex-row items-center gap-2">
                          <GoPeople className="text-lg text-green" />
                          <p className="">{students} Students</p>
                        </div>
                      </div>
                      <h3 className="text-2xl font-semibold text-green font-poppins">
                        {price}$
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </Slider>
        {/* button */}
        <button
          onClick={previous}
          className="bg-white absolute z-20 top-1/2 -translate-y-1/2 left-5 text-green hover:text-white hover:bg-green duration-500 p-5 rounded-full"
        >
          <MdOutlineArrowBackIos />
        </button>
        <button
          onClick={next}
          className="bg-white absolute right-5 top-1/2 -translate-y-1/2 text-green hover:text-white hover:bg-green duration-500 p-5 rounded-full"
        >
          <MdOutlineArrowForwardIos />
        </button>
      </div>
    </section>
  );
};
export default NewSkills;
