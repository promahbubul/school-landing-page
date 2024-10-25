import SectionTitle from "../../../shared/ui/SectionTitle";

const Heading = () => {
  return (
    <div className="flex justify-between items-center">
      <SectionTitle title={"Choose favourite course from top cartegories"} />
      <button className="font-poppins text-2xl text-dark2 font-normal">
        See all
      </button>
    </div>
  );
};
export default Heading;
