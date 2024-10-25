/* eslint-disable react/prop-types */
const Button = ({ className, text }) => {
  return (
    <button
      className={`bg-green hover:bg-white border border-transparent hover:border-green   text-white hover:text-green font-semibold text-base duration-200 hover:scale-95 active:scale-100  font-source-sans-3 rounded-md ${className}`}
    >
      {text}
    </button>
  );
};
export default Button;
