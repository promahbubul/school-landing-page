import NavLeft from "./NavLeft";
import NavRight from "./NavRight";

const Navbar = () => {
  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden md:flex flex-row justify-between items-center">
        {/* Left */}
        <NavLeft />
        {/* Right */}
        <NavRight />
      </div>
    </>
  );
};
export default Navbar;
