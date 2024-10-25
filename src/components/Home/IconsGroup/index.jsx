import serviceData from "../../../constant/home/services.constant";

const IconsGroup = () => {
  return (
    <div className="flex flex-row justify-between mt-20">
      {serviceData.map(({ id, title, icon: Icon }) => (
        <div
          className="bg-light-blue py-3 px-10 flex flex-row items-center gap-3 rounded-md"
          key={id}
        >
          <div
            className="bg-green p-2
           rounded-full"
          >
            <Icon />
          </div>
          <p className="text-base font-normal text-black">{title}</p>
        </div>
      ))}
    </div>
  );
};
export default IconsGroup;
