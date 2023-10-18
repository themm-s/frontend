import { motion } from "framer-motion";

export const MainDiv = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: .5,
        delay: 0.2,
        ease: [.62, .02, .31, .99]
      }}
      className="flex select-none justify-center ml-1/2 items-center h-screen w-screen 
        align-middle
        place-items-center justify-items-center font-bold rounded-xl"
    >
      {children}
    </motion.div>
  );
};