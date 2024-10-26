const FooterBottom = () => {
  return (
    <div className="mb-10 md:mt-28 ">
      <form action="" className="max-w-[545px] mx-auto">
        <h1 className="text-white text-sm md:text-2xl font-poppins font-normal md:font-semibold text-left md:text-center">
          Subscribe to get latest updates
        </h1>
        <div className="flex flex-row mt-1 md:mt-5">
          <input
            type="email"
            placeholder="Your Email address"
            name="email"
            className="bg-white text-green font-medium  font-poppins text-[10px] md:text-sm border-none outline-none placeholder:text-green p-3 md:p-5 w-full "
          />
          <button className="text-white bg-green p-3 md:py-4 md:px-8 text-[10px] md:text-sm font-normal font-poppins">
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};
export default FooterBottom;
