import { footerGif, section3Bg } from "../../../assets";
import LeftArea from "./LeftArea";
import RightArea from "./RightArea";

const FristStep = () => {
  return (
    <section className=" bg-black relative  mt-32">
      <div className="absolute hidden md:block inset-0 overflow-hidden ">
        <img src={section3Bg} alt="" className="object-cover w-full" />
        <img
          src={footerGif}
          alt=""
          className="absolute -top-40  inset-0 object-cover w-full opacity-20"
        />
      </div>
      <div className="max-w-7xl relative z-20 mx-auto pt-10 pb-16 px-4 md:px-5 flex flex-col md:flex-row gap-24">
        <LeftArea />
        <RightArea />
      </div>
    </section>
  );
};
export default FristStep;
