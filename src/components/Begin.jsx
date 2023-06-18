import { motion } from "framer-motion";
import React, { useState } from "react";
import Button from "./Button";


const Begin = ({ value, setValue, setTakeForm }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const admin = [
    { text: 'Ник Администратора: ', value: '' },
    { text: 'STEAMID Администратора: ', value: '' },
    { text: 'Дата и время: ', value: '' },
    { text: 'Развёрнутое описание проблемы и нарушений Администратора: ', value: '' },
    { text: 'Док-ва: ', value: '' },
    { text: 'Ссылка на ваш стим профиль: ', value: '' },
  ];

  const appeal = [
    { text: 'Ваш Ник: ', value: '' },
    { text: 'Ваш STEAMID: ', value: '' },
    { text: 'Дата и время: ', value: '' },
    { text: 'Развёрнутое описание: ', value: '' },
    { text: 'Док-ва вашей невиновности: ', value: '' },
    { text: 'Ссылка на ваш стим профиль: ', value: '' },
  ];
  // console.log(value)

  function changeIndex() {
    if (event.target.value == 'admin') {
      setTakeForm(admin);
    } else if (event.target.value == 'appeal') {
      setTakeForm(appeal);
    }
    setValue(value => value + 1);
    setCurrentIndex(currentIndex => currentIndex + 1);
    if (currentIndex > 2) {
      setCurrentIndex(currentIndex => currentIndex = 0);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
      className="flex justify-center ml-1/2 items-center h-screen w-screen 
        align-middle 
        bg-gradient-to-r from-indigo-600 to-pink-500 
        place-items-center justify-items-center font-bold rounded-xl"
    >
      <Button
        onClick={changeIndex}
        value='admin'
      >
        Жалоба на администратора
      </Button>
      <Button
        onClick={changeIndex}
        value='player'
      >
        Жалоба на игрока
      </Button>
      <Button
        onClick={changeIndex}
        value='appeal'
      >
        Заявка на разбан
      </Button>
    </motion.div>
  );
};

export default Begin;