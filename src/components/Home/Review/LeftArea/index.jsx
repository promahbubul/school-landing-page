/* eslint-disable react/prop-types */
import { useRef } from "react";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
  underline,
} from "../../../../assets/icons";

const LeftArea = ({ next, previous }) => {
  return (
    <div className="w-4/12">
      <div className="text-[48px] relative text-black font-bold font-open-sans">
        <h1 className="">
          What our <span className="text-green">Students</span> say about us
        </h1>
        <img src={underline} alt="" className="absolute top-[135px]" />
      </div>
      <div className="mt-14 flex flex-row gap-12">
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
  );
};
export default LeftArea;
