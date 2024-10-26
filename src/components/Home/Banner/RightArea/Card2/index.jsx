import { PeopleIcon } from "../../../../../assets/icons";

const Card2 = () => {
  return (
    <div className="md:p-3 p-1 bottom-10  w-[129px] md:pb-2 flex flex-col justify-center items-center absolute drop-shadow-2xl shadow-lg -right-10  bg-white rounded-lg  rounded-br-5">
      <div className="p-2 w-max rounded-full bg-light-green">
        <PeopleIcon />
      </div>
      <p className="text-[14.48px] md:text-2xl leading-normal mt-1 font-semibold text-green font-poppins">
        15k{" "}
      </p>
      <p className="text-[7.24px] md:text-xs font-medium text-center text-dark2 leading-normal  font-poppins">
        Amazing students around the globe
      </p>
    </div>
  );
};
export default Card2;
