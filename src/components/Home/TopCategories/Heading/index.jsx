import SectionTitle from "../../../shared/ui/SectionTitle";

const Heading = () => {
  return (
    <div className="flex justify-between items-center">
      <SectionTitle className={"w-9/12 md:w-full"} title={"Choose favourite course from top cartegories"} />
      <button className="w-3/12 md:w-full font-poppins text-sm md:text-2xl text-dark2 font-normal">
        See all
      </button>
    </div>
  );
};
export default Heading;
