/* eslint-disable react/prop-types */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import reviewsData from "../../../../constant/home/reviews.constant";

const RightArea = ({ sliderRef }) => {
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
    <div className="w-8/12">
      <Slider
        ref={(slider) => {
          console.log(slider);
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
  );
};
export default RightArea;
