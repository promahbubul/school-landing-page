import { bannerImg } from "../../../../assets";

const RightArea = () => {
  return (
    <div
    
      className="w-full flex justify-end relative z-20 "
    >
      <div
        className="group overflow-hidden  cursor-pointer
       w-max rounded-t-[40px] rounded-bl-[40px] duration-300 rounded-br-[100px]"
      >
        <img
          src={bannerImg}
          className="relative group-hover:scale-110   transition-all duration-300 "
          alt=""
        />
      </div>
    </div>
  );
};
export default RightArea;
