import CompanyInfo from "./CompanyInfo";
import FooterMenus from "./FooterMenus";

const FooterTop = () => {
  return (
    <div className="flex  flex-col-reverse md:flex-row gap-10 md:gap-[91px] items-center">
      <CompanyInfo />
      <FooterMenus />
    </div>
  );
};
export default FooterTop;
