import NavLeft from "./NavLeft";
import NavRight from "./NavRight";
import { FaRegUserCircle, SlMenu } from "../../../assets/icons";
import { logo } from "../../../assets";

const Navbar = () => {
  return (
    <>
      {/* Mobile Navbar */}
      <div className="flex md:hidden flex-row py-5 justify-between items-center">
        <div className="flex flex-row items-center gap-3">
          <span className="text-3xl">
            <SlMenu />
          </span>
          <img src={logo} alt="" />
        </div>
        <span className="text-3xl">
          <FaRegUserCircle />
        </span>
      </div>
      {/* Desktop Navbar */}
      <div className="shadow-sm px-4 md:px-5 sticky top-0 left-0 z-50 bg-white">
        <div className="hidden max-w-7xl  mx-auto md:flex flex-row justify-between items-center">
          {/* Left */}
          <NavLeft />
          {/* Right */}
          <NavRight />
        </div>
      </div>
    </>
  );
};
export default Navbar;
