import { faArrowLeft, faArrowRight, faRepeat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { MainDiv } from "../components/MainDiv/MainDiv";

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
      <h1 className="text-gray-200">{takeForm[indexForm]?.text}</h1>
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
    <MainDiv>
      <div className='rounded-md w-full xl:w-3/6 h-full p-2'>
        <ul className="flex flex-col border shadow-lr justify-around text-gray-200 h-1/2 font-black
        shadow-gray-800 m-3 p-5 rounded-xl">
          {takeForm.map((form, index) => (
            <li key={index} className={`justify-start items-start text-start overflow-hidden ${index != 3 ? "truncate" : ""} h-24}`}>
              {index + 1}. {form.text} {form.value}
            </li>
          ))}
        </ul>
        <div className="grid grid-cols-1 gap-1 place-items-center h-20">
          <div className='mt-10'>
            <Formtext />
          </div>
          <input
            className="rounded-lg outline-none m-auto w-1/2 p-2 bg-white bg-opacity-50 placeholder:text-black placeholder:text-opacity-40"
            autoComplete="off"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={placeHolder[indexForm]?.text}
          />
          <div className="flex w-1/2 gap-3">
            <button className="w-full hover:bg-gray-400 shadow-lg shadow-gray-700 hover:-translate-x-1 bg-white 
            transition duration-300 bg-opacity-20 rounded-md p-1 
        items-center justify-center" onClick={() => backButton()}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button className="hover:bg-gray-400 hover:translate-x-1 shadow-lg shadow-gray-700 bg-white 
            transition duration-300 bg-opacity-20 rounded-md ml-auto w-full p-1 
        items-center" onClick={handleButtonClick(indexForm)}>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
          <button className="hover:bg-gray-900 hover:text-white mt-5 shadow-md shadow-gray-800 bg-gray-600 
          rounded-full transition transform hover:rotate-180 ease-in-out duration-500 w-8 h-8 
        items-center justify-center" onClick={() => setValue(0)}>
            <FontAwesomeIcon className="" icon={faRepeat} />
          </button>
        </div>
      </div>
    </MainDiv>
  );
};