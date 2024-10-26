import Button from "../../../shared/ui/Button";
import SectionTitle from "../../../shared/ui/SectionTitle";
import { SlArrowDown } from "../../../../assets/icons";

const Heading = () => {
  return (
    <div className="flex flex-row justify-between items-center">
      <SectionTitle
        title={"Most Popular courses"}
        className={"Most Popular courses"}
      />
      <Button
        className={"px-2 md:px-4 py-1 md:py-2 !rounded-full !text-xs  !md:text-base "}
        text={"Sort by"}
        icon={SlArrowDown}
      />
    </div>
  );
};
export default Heading;
