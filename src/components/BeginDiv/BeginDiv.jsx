import { motion } from "framer-motion";

export const BeginDiv = ({ children }) => {
  return (
    <motion.div
      className="flex select-none justify-center ml-1/2 items-center h-screen w-screen 
        align-middle
        place-items-center justify-items-center font-bold rounded-xl"
    >
      {children}
    </motion.div>
  );
};