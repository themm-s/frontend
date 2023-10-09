import { motion } from "framer-motion";
import { useState } from "react";

import Button from "./Button/Button";


export const Begin = ({ setValue, setTakeForm }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const admin = [
    { text: 'Ник Администратора: ', value: '' },
    { text: 'STEAMID Администратора: ', value: '' },
    { text: 'Дата и время: ', value: '' },
    { text: 'Развёрнутое описание проблемы и нарушений Администратора: ', value: '' },
    { text: 'Док-ва: ', value: '' },
    { text: 'Ссылка на ваш стим профиль: ', value: '' },
  ];

  const player = [
    { text: 'Ник: ', value: '' },
    { text: 'STEAMID: ', value: '' },
    { text: 'Дата и время: ', value: '' },
    { text: 'Развёрнутое описание: ', value: '' },
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

  function changeIndex() {
    if (event.target.value == 'admin') {
      setTakeForm(admin);
    } else if (event.target.value == 'appeal') {
      setTakeForm(appeal);
    } else {
      setTakeForm(player);
    }
    setValue(value => value + 1);
    setCurrentIndex(currentIndex => currentIndex + 1);
    if (currentIndex > 2) {
      setCurrentIndex(currentIndex => currentIndex = 0);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
      className="flex justify-center ml-1/2 items-center h-screen w-screen 
        align-middle
        place-items-center justify-items-center font-bold rounded-xl"
    >
      <div id="updates" className="absolute text-center text-lg rounded border m-5 p-2 text-gray-200 top-0 left-0 w-1/2 md:w-1/6 shadow-xl h-1/3">
        Список недавних обновлений
        <ul className="mt-5 text-sm">
          <li>1. Обновление UI дизайна</li>
          <li>2. Фикс ошибок</li>
        </ul>
        <h5 className="absolute text-xs bottom-0 opacity-70 mb-2 rounded-full p-2">
          При возникновении ошибок писать в тг <a href="https://t.me/themm_s" className="underline text-blue-400 hover:text-white duration-150">Themms</a>
        </h5>
      </div>
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