import { useState } from "react";

/* eslint-disable react/prop-types */
const Card = ({ designation, id, img, message, name, time }) => {
  const [showProfileImage, setProfileImage] = useState(false);
  const handleShowImage = (time) => {
    setTimeout(() => {
      setProfileImage(!showProfileImage);
    }, time);
  };
  return (
    <div
      key={id}
      className={`  relative  rounded-lg  w-full py-9 px-12 ${
        !showProfileImage && "drop-shadow-2xl shadow-xl"
      }`}
    >
      {handleShowImage(time)}

      <div
        className={`absolute flex justify-center items-center  top-1/2 left-1/2 w-full h-full -translate-x-1/2 bg-white rounded-md -translate-y-1/2  ${
          showProfileImage
            ? "opacity-100 duration-500 z-20"
            : "opacity-0 duration-300"
        }`}
      >
        <img src={img} alt="" className="w-56" />
      </div>

      <div
        className={`text-center relative  ${
          showProfileImage
            ? "opacity-0 -left-96 duration-500"
            : "opacity-100  left-0 duration-500"
        }`}
      >
        <img src={img} alt="" className="mx-auto h-[114px] w-[114px]" />
        <div className="mt-4">
          <h3 className="text-xl font-semibold text-dark2 font-source-sans-3">
            {name}
          </h3>
          <h4 className="mt-1 text-base font-poppins  font-medium text-green">
            {designation}
          </h4>
        </div>
        <p className="mt-9  font-normal font-poppins text-dark2">{message}</p>
      </div>
    </div>
  );
};
export default Card;
