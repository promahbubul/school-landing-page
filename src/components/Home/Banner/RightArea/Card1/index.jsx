import { instructor1 } from "../../../../../assets/avatar";

const Card1 = () => {
  return (
    <div className="bg-white   px-3 md:px-6 py-2 md:py-4 rounded-2xl rounded-br-[30px] max-w-[142.36px] md:max-w-[262px] absolute shadow-sm drop-shadow-2xl top-1/3  md:top-1/2 left-0">
      <p className="font-poppins font-semibold text-center text-[10.87px] md:text-xl text-gray">
        Learn from best <span className="text-green">instructors</span> around
        the globe
      </p>
      {/* Card 1 */}
      <div className="mt-3 flex flex-row  items-center relative h-16   text-center justify-center max-w-max mx-auto ">
        <div className="bg-white cursor-pointer   rounded-full ">
          <img src={instructor1} alt="" className="w-7 h-7 md:w-12 md:h-12" />
        </div>
        <div className="bg-white cursor-pointer -ml-2 md:-ml-5 p-1 rounded-full">
          <img src={instructor1} alt="" className="w-7 h-7 md:w-12 md:h-12" />
        </div>
        <div className="bg-white cursor-pointer -ml-2 md:-ml-5 p-1 rounded-full">
          <img src={instructor1} alt="" className="w-7 h-7 md:w-12 md:h-12" />
        </div>
        <div className="bg-white cursor-pointer -ml-2 md:-ml-5 p-1 rounded-full">
          <img src={instructor1} alt="" className="w-7 h-7 md:w-12 md:h-12" />
        </div>
      </div>
    </div>
  );
};
export default Card1;
