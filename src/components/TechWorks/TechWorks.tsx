import { motion } from "framer-motion";

export const TechWorks = () => {

  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: .5,
          delay: 0.5,
          ease: [.37, 0, .6, .76]
        }}
        className="absolute top-10 text-6xl text-[#fe7366]">
        Технические работы
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: .5,
          delay: 0.7,
          ease: [.37, 0, .6, .76]
        }}
        className="w-1/2 text-center text-3xl bg-opacity-25 text-gray-300 p-3 bg-black">
        Ожидаемое окончание работ через: -
        <h1 className="text-red-700 mt-10">Страница автоматически перезагрузиться через -</h1>
      </motion.div>
    </>
  );
};