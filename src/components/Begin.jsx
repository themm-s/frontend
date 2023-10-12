import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import Button from "./Button/Button";
import { updates } from "../constants";
import { Input } from "./Input/Input";
import axios from "axios";


export const Begin = ({ setValue, setTakeForm }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sendingAnimation, setSendingAnimation] = useState(false);
  const [sending, setSend] = useState(false);
  const refOffer = useRef(null);
  const refOfferSecond = useRef(null);
  const [offer, setOffer] = useState("");
  const [sender, setSender] = useState("");
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

  const sendOffer = () => {
    sendTimeout();
    try {
      fetch('https://unionreportbackend.onrender.com/offer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          sender: sender,
          offer: offer
        })
      });
    } catch (e) {
      console.error(e);
    }
    refOffer.current.value = '';
    refOfferSecond.current.value = '';
    setOffer('');
    setSender('');
  };

  const sendTimeout = () => {
    setSendingAnimation(true);
    setTimeout(() => {
      setSend(true);
    }, 750);
    setTimeout(() => {
      setSendingAnimation(false);
    }, 1900);
    setTimeout(() => {
      setSend(false);
    }, 2000);
  };

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
      <h1 className="hidden md:block absolute top-5 text-8xl opacity-70 text-white mb-2 rounded-full p-2"><a className="text-[#fe7366]">Union</a>Report</h1>
      <div id="updates" className="absolute text-center text-lg rounded border m-5 p-2 text-gray-200 top-0 left-0 w-1/2 md:w-1/6 shadow-xl h-1/3">
        <h1>Список недавних обновлений</h1>
        <ul className="mt-5 text-sm space-y-1">
          {updates.map((update, index) => {
            return (
              <li>{index + 1}. {update}</li>
            );
          })}
        </ul>
        <h5 className="absolute text-xs bottom-0 opacity-70 mb-2 rounded-full p-2">
          При возникновении ошибок писать в предложения ниже
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
      <div className="absolute p-4 bg-opacity-5 m-5 text-center rounded bg-white bottom-0 left-0 w-1/6 border">
        {sending
          ? <p className={` mb-3 transition ${sendingAnimation ? 'opacity-100 text-green-500' : 'opacity-0'} duration-200`}>Форма отправлена <br />Cпасибо за предложение!</p>
          : <p className={`text-center text-white transition ${sendingAnimation ? 'opacity-0' : 'opacity-100'} duration-500 text-white mb-3`}>Есть предложения? <br /> Пиши свои идеи!</p>
        }
        <form className="space-y-4">
          <Input
            placeholder="Ваш ник"
            value={sender}
            onInput={event => setSender(event.target.value)}
            offer={refOffer}
          />
          <Input
            placeholder="Предложение"
            value={offer}
            onInput={event => setOffer(event.target.value)}
            className="h-24"
            offer={refOfferSecond}
          />
        </form>
        <button onClick={sendOffer} className="mt-3 w-1/2 bg-black font-bold break-words bg-opacity-70 hover:bg-opacity-50 text-white p-1 rounded">
          Отправить
        </button>
      </div>
    </motion.div>
  );
};