import { faArrowLeft, faArrowRight, faRepeat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const Form = ({ setValue, takeForm }) => {
  const [indexForm, setIndexForm] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const [placeHolder] = useState([
    { text: ' Ivan' },
    { text: ' STEAM_0:0:111110000' },
    { text: ' 01.01.2023' },
    { text: ' Просто так убил' },
    { text: ' *Ссылка на ютуб*' },
    { text: ' https://steamcommunity.com/profiles/76561198810663480' }
  ]);

  function Formtext() {
    return (
      <h1>{takeForm[indexForm]?.text}</h1>
    );
  }

  useEffect(() => {
    if (indexForm > 5) {
      setIndexForm(0);
      setValue(2);
    }
  }, [takeForm, indexForm]);

  const handleButtonClick = (index) => {
    return () => {
      const newForms = [...takeForm];
      if (inputValue != undefined) {
        newForms[index].value = inputValue;
      } else {
        console.log(undefined);
      }
      setIndexForm(indexForm => indexForm + 1);
      if (indexForm > 4) {
        setIndexForm(0);
        setValue(2);
      }
      setInputValue('');
    };
  };

  const backButton = () => {
    if (indexForm == 0) {
      return;
    } else {
      setIndexForm(indexForm => indexForm - 1);
      setInputValue('');
    }
  };

  const keydownHandler = ({ key }) => {
    switch (key) {
      case 'Enter':
        handleButtonClick(indexForm)();
        break;
      default:
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', keydownHandler);
    return () => document.removeEventListener('keydown', keydownHandler);
  });

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
        place-items-center justify-items-center font-bold rounded-xl"
    >
      <div className='rounded-md w-1/2 h-1/2 p-2'>
        <ul className="grid content-between h-72 font-black">
          {takeForm.map((form, index) => (
            <li key={index}>
              {index + 1}. {form.text}
              <button
                key={index}
                type="text"
                className="justify-end items-end text-end"
              >
                {form.value}
              </button>
              <hr />
            </li>
          ))}

        </ul>
        <div className="grid grid-cols-1 gap-1 place-items-center h-20">
          <div className='mt-3'>
            <Formtext />
          </div>
          <input
            className="rounded-lg m-auto w-1/2 border-none p-2"
            autoComplete="off"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={placeHolder[indexForm]?.text}
          />
          <div className="flex w-1/2 gap-5">
            <button className="w-full hover:bg-fuchsia-200 bg-white rounded-md p-1 
        items-center justify-center" onClick={() => backButton()}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>

            <button className="hover:bg-fuchsia-200 bg-white rounded-md w-full p-1 
        items-center justify-center" onClick={handleButtonClick(indexForm)}>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
          <button className="hover:bg-indigo-400 mt-5 bg-indigo-500 rounded-md w-1/2 p-1 
        items-center justify-center" onClick={() => setValue(0)}>
            <FontAwesomeIcon icon={faRepeat} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};