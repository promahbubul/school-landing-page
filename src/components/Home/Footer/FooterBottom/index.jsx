const FooterBottom = () => {
  return (
    <div className="mt-28">
      <form action="" className="max-w-[545px] mx-auto">
        <h1 className="text-white text-2xl font-poppins font-semibold text-center">
          Subscribe to get latest updates
        </h1>
        <div className="flex flex-row mt-5">
          <input
            type="email"
            placeholder="Your Email address"
            name="email"
            className="bg-white text-green font-medium  font-poppins text-sm border-none outline-none placeholder:text-green p-5 w-full "
          />
          <button className="text-white bg-green py-4 px-8 text-sm font-normal font-poppins">
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};
export default FooterBottom;
