import Button from "../../../shared/ui/Button";

const LeftArea = () => {
  return (
    <div className="w-full">
      <h1 className="text-[32px] relative z-30 md:text-6xl font-bold font-poppins leading-normal">
        Quality <span className="text-green">Education</span> By Any Means
        Necessary.
      </h1>
      <Button className={"py-5 mt-12 px-10"} text={"Get Started"} />
    </div>
  );
};
export default LeftArea;
