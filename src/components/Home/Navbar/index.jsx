import NavLeft from "./NavLeft";
import NavRight from "./NavRight";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center">
      {/* Left */}
      <NavLeft />
      {/* Right */}
      <NavRight />
    </div>
  );
};
export default Navbar;
