import { forwardRef } from "react";

/**
 * @type {import("react").FC<JSX.IntrinsicElements['button']>}
 */
const Button = forwardRef(
  ({ children, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`flex hover:bg-fuchsia-200 bg-white rounded-xl ml-2 
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