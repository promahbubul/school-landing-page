/* eslint-disable react/prop-types */
const SectionTitle = ({ title, className }) => {
  return (
    <h1
      className={`text-dark2 text-[32px] font-semibold font-poppins ${className}`}
    >
      {title}
    </h1>
  );
};
export default SectionTitle;
