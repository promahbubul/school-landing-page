import { Link } from "react-router-dom";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "../../../../../assets/icons";

const CompanyInfo = () => {
  return (
    <div className="w-full md:w-3/12 ">
      <h1 className="text-[32.8px] font-semibold font-open-sans text-white">
        WiSchool
      </h1>
      <p className="mt-8 text-white font-normal text-base font-poppins">
        We are not here to sell you products, we sell value through our
        expertise.
      </p>
      <div className="flex flex-row items-center gap-6 mt-8">
        <Link to={"#"}>
          <FacebookIcon />
        </Link>
        <Link to={"#"}>
          <TwitterIcon />
        </Link>
        <Link to={"#"}>
          <InstagramIcon />
        </Link>
        <Link to={"#"}>
          <LinkedInIcon />
        </Link>
      </div>
    </div>
  );
};
export default CompanyInfo;
