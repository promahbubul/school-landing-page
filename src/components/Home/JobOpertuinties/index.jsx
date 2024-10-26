import SectionTitle from "../../shared/ui/SectionTitle";
import LeftArea from "./LeftArea";
import RightArea from "./RightArea";

const JobOpportunities = () => {
  return (
    <section className="mt-14">
      <SectionTitle title={"We Bring The Good Education To Life"} />
      <div className="flex flex-row items-center mt-16 gap-24">
        <LeftArea />
        <RightArea />
      </div>
    </section>
  );
};
export default JobOpportunities;
