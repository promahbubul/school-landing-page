/* eslint-disable react/prop-types */
const Button = ({ className, text, icon }) => {
  return (
    <button
      className={`bg-green hover:bg-white border border-transparent hover:border-green   text-white hover:text-green font-semibold text-base duration-200 hover:scale-95 active:scale-100  font-source-sans-3 rounded-md flex flex-row items-center gap-2 ${className}`}
    >
      {icon && <span className="text-2xl">{icon()}</span>}
      {text}
    </button>
  );
};
export default Button;
