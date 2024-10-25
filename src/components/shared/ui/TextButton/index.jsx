/* eslint-disable react/prop-types */
const TextButton = ({ className, text }) => {
  return (
    <button
      className={`text-green hover:text-green/90   font-semibold text-base duration-200 hover:scale-95 active:scale-100 active:text-green font-source-sans-3 rounded-md ${className}`}
    >
      {text}
    </button>
  );
};
export default TextButton;
