import { jobOpportunities } from "../../../../assets";
import { BugIcon, underline } from "../../../../assets/icons";

const LeftArea = () => {
  return (
    <div className="w-full md:w-4/12 group  relative ">
      <div className="overflow-hidden rounded-[28.93px] rounded-br-[72.32px] cursor-pointer">
        <img
          src={jobOpportunities}
          alt=""
          className="group-hover:scale-110 duration-500 group-hover:translate-y-5 group-hover:-translate-x-5"
        />
      </div>
      {/* Card */}
      <div className="absolute top-1/2 px-2 pt-3 rounded-[6.89px] rounded-br-[17.22px] shadow-sm drop-shadow-2xl pb-6 -right-10 z-50 bg-white ">
        <div className="w-max p-2 rounded-full mx-auto bg-light-green">
          <BugIcon />
        </div>
        <div className="mt-2 text-center relative">
          <p className="text-green text-2xl font-semibold font-poppins">Job</p>
          <p className="text-dark2 text-base font-semibold ">Opportunities</p>
          <img
            src={underline}
            alt=""
            className="absolute top-8 w-1/2  left-1/2 -translate-x-1/2"
          />
        </div>
      </div>
    </div>
  );
};
export default LeftArea;
