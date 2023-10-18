import { forwardRef } from "react";
import { styles } from "../../constants/index";
import { motion } from "framer-motion";

/**
 * @type {import("react").FC<JSX.IntrinsicElements['button']>}
 */
const Button = forwardRef(
  ({ children, atag, ataghref, onClick, ycord, className, ...props }, ref) => {
    return (
      <>
        {atag ?
          <a onClick={onClick} className={`flex mb-16 md:mb-0 text-gray-200 transition hover:-translate-y-2 
          duration-500 shadow-md mx-5 cursor-pointer hover:shadow-2xl shadow-gray-700 border-black 
          ease-in-out hover:bg-gray-300 hover:bg-opacity-50 rounded-xl ml-2 
          h-[38px] w-50 p-5
          items-center justify-center`} href={ataghref}>
            {children}
          </a>
          :
          <button
            onClick={onClick}
            ref={ref}
            className={`${styles} button-begin ${className ?? ''}`}
            {...props}
          >
            {children}
          </button>}
      </>
    );
  }
);

export default Button;