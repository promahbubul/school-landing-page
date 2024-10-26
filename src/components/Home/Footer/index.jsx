import FooterBottom from "./FooterBottom";
import FooterTop from "./FooterTop";

const Footer = () => {
  return (
    <section className="bg-black pt-28 pb-14">
      <div className="max-w-7xl mx-auto px-4 md:px-5">
        <FooterTop />
        <FooterBottom />
      </div>
    </section>
  );
};
export default Footer;
