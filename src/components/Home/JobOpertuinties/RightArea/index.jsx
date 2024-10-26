import jobopportunitiesData from "../../../../constant/home/jobopertunities.constant";

function RightArea() {
  return (
    <div className="w-8/12 ">
      <h1 className="text-[48px] max-w-[533px] font-semibold font-poppins text-dark2">
        Let Your Education Do The Walking
      </h1>
      <div className="flex flex-col gap-8 mt-6">
        {jobopportunitiesData.map(({ icon: Icon, id, title }) => (
          <div key={id} className="flex flex-row items-center gap-6">
            <span className="bg-light-blue p-3 rounded-full">
              <Icon />
            </span>
            <p className="">{title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default RightArea;
