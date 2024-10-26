import { bannerImg } from "../../../../assets";
import Card1 from "./Card1";
import Card2 from "./Card2";

const RightArea = () => {
  return (
    <div className="w-full relative  flex justify-end  z-20 ">
      <div
        className="group overflow-hidden w  cursor-pointer
       flex justify-end md:w-max rounded-t-[40px]  rounded-bl-[40px] duration-300 rounded-br-[100px]"
      >
        <img
          src={bannerImg}
          className="relative group-hover:scale-125 group-hover:translate-y-14 group-hover:-translate-x-10 w-full    ease-in-out duration-1000 "
          alt=""
        />
      </div>
      <Card1 />
      <Card2 />
    </div>
  );
};
export default RightArea;
