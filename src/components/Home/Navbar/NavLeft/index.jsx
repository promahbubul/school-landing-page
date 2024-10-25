import { NavLink } from "react-router-dom";
import { logo } from "../../../../assets";
import navbarData from "../../../../constant/home/navbar.constant";

const NavLeft = () => {
  return (
    <div className="flex flex-row justify-between  py-6 w-8/12 items-center">
      <div className="">
        <img src={logo} alt="" />
      </div>
      <div className="flex flex-row gap-6">
        {navbarData?.map(({ id, link, title }) => (
          <NavLink
            to={link}
            key={id}
            className="group relative  p-3 overflow-hidden text-gray/60 font-semibold text-base "
          >
            <div className="absolute  duration-500 text-gray group-hover:translate-y-0  translate-y-10">
              {title}
            </div>
            <div className="relative  duration-500  group-hover:-translate-y-10  -translate-y-0">
              {title}
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};
export default NavLeft;
