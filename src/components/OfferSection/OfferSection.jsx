import { motion } from "framer-motion";

export const OfferSection = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.5,
        delay: 0.4,
        ease: [0, 0.71, 0.2, 1.01]
      }}
      className="absolute hidden md:block text-center text-lg rounded border 
      m-5 p-2 pb-5 overflow-hidden truncate text-gray-200 
      top-20 right-0 w-1/3 md:w-1/4 shadow-xl">
      {children}
    </motion.div>
  );
};