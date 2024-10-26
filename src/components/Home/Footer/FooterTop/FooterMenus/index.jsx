import { Link } from "react-router-dom";
import footerMenuData from "../../../../../constant/home/footerMenu.constant";

const FooterMenus = () => {
  return (
    <div className="w-full md:w-9/12  justify-between text-white grid grid-cols-2 md:grid-cols-5 gap-5 md:gap-16">
      {footerMenuData.map((menuList, index) => (
        <div key={index} className="flex flex-col gap-2">
          {menuList.map((menu) => (
            <Link
              to={menu.link}
              className=" text-sm font-open-sans font-normal leading-normal"
              key={menu.id}
            >
              <p className="">{menu.title}</p>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};
export default FooterMenus;
