import LeftArea from "./LeftArea";
import RightArea from "./RightArea";

const Banner = () => {
  return (
    <div className=" bg-gradient-to-tr  from-green/10 from-5% to-70% to-white rounded-[50px] py-10 px-14 mt-3 justify-between  flex flex-row items-center relative">
      <LeftArea />
      <RightArea />
      <div className="w-24 absolute inset-y-0 bg-light-blue right-0 rounded-r-3xl z-10"></div>
    </div>
  );
};
export default Banner;
