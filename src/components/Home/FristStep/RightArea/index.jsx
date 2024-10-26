import Button from "../../../shared/ui/Button";

const RightArea = () => {
  return (
    <div className="w-full">
      <h1 className="text-2xl text-center md:text-left md:text-[42px] text-white font-bold leading-normal font-open-sans">
        You don’t have to see the whole staircase just take the first step
      </h1>
      <p className="mt-6 text-base md:text-2xl text-center md:text-left font-open-sans text-white  font-normal">
        Amet in a suspendisse convallis eget, Amet in a suspendisse convallis
        egetAmet in a
      </p>
      <div className="mt-20 flex flex-row items-center gap-3 md:gap-8">
        <Button text={"Get Started"} className={"py-5 px-10"} />
        <Button
          text={"Place a call"}
          className={
            "py-5 px-10 bg-light-green !text-green !border !border-green"
          }
        />
      </div>
    </div>
  );
};
export default RightArea;
