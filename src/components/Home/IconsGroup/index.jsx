import serviceData from "../../../constant/home/services.constant";

const IconsGroup = () => {
  return (
    <div className="grid grid-cols-2 gap-4 md:gap-3 md:flex md:flex-row flex-wrap md:flex-none justify-around md:justify-between mt-20">
      {serviceData.map(({ id, title, icon: Icon }) => (
        <div
          className="bg-light-blue py-2 md:py-3 px-4 md:px-10 flex flex-row items-center gap-2 md:gap-3 rounded-md"
          key={id}
        >
          <div
            className="bg-green p-1.5   md:p-2
           rounded-full"
          >
            <Icon />
          </div>
          <p className="text-sm md:text-base font-normal text-black">{title}</p>
        </div>
      ))}
    </div>
  );
};
export default IconsGroup;
