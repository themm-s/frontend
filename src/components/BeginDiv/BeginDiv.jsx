import { motion } from "framer-motion";

export const BeginDiv = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
      className="flex select-none justify-center ml-1/2 items-center h-screen w-screen 
        align-middle
        place-items-center justify-items-center font-bold rounded-xl"
    >
      {children}
    </motion.div>
  );
};