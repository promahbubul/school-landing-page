import CompanyInfo from "./CompanyInfo";
import FooterMenus from "./FooterMenus";

const FooterTop = () => {
  return (
    <div className="flex  flex-row gap-[91px] items-center">
      <CompanyInfo />
      <FooterMenus />
    </div>
  );
};
export default FooterTop;
