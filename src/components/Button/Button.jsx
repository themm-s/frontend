import { forwardRef } from "react";

/**
 * @type {import("react").FC<JSX.IntrinsicElements['button']>}
 */
const Button = forwardRef(
  ({ children, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`flex text-gray-200 transition hover:-translate-y-2 duration-500 shadow-lg border-black ease-in-out hover:bg-fuchsia-200 hover:bg-opacity-50 rounded-xl ml-2 
        h-[38px] w-50 p-2 
        items-center justify-center ${className ?? ''}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

export default Button;