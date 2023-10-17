import { forwardRef } from "react";
import { styles } from "../../constants/index";

/**
 * @type {import("react").FC<JSX.IntrinsicElements['button']>}
 */
const Button = forwardRef(
  ({ children, atag, ataghref, onClick, className, ...props }, ref) => {
    return (
      <>
        {atag ?
          <a onClick={onClick} className={`${styles} ${className}`} href={ataghref}>
            {children}
          </a>
          :
          <button
            onClick={onClick}
            ref={ref}
            className={`${styles} ${className ?? ''}`}
            {...props}
          >
            {children}
          </button>}
      </>
    );
  }
);

export default Button;