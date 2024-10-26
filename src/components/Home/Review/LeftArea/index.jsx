/* eslint-disable react/prop-types */
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
  underline,
} from "../../../../assets/icons";

const LeftArea = ({ next, previous }) => {
  return (
    <div className="w-full md:w-4/12  flex items-end flex-row md:flex-col gap-6 md:gap-0">
      <div className="text-2xl md:text-2xl md:text-[48px]  relative text-black font-bold font-open-sans">
        <h1 className="">
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
  );
};
export default LeftArea;
