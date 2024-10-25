import Button from "../../../shared/ui/Button";
import TextButton from "../../../shared/ui/TextButton";
import { IoSearch } from "../../../../assets/icons/";

const NavRight = () => {
  return (
    <div className="w-4/12 flex items-center flex-row justify-end">
      <button className="text-2xl font-normal hover:scale-95 active:scale-100 text-dark-red">
        <IoSearch />
      </button>
      <TextButton text={"Login"} className={"px-6 py-3 "} />
      <Button text={"Register"} className={"px-6 py-3 "} />
    </div>
  );
};
export default NavRight;
