import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Form = ({ value, setValue, takeForm, setTakeForm }) => {
  const [indexForm, setIndexForm] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const [placeHolder, setPlaceHolder] = useState([
    { text: '' },
    { text: ' STEAM_0:0:111110000' },
    { text: ' 01.01.2023' },
    { text: '' },
    { text: '' },
    { text: ' https://steamcommunity.com/profiles/76561198810663480' }
  ]);

  function Formtext() {
    return (
      <h1>{takeForm[indexForm].text}</h1>
    );
  }

  useEffect(() => {
    console.log("Forms updated");
  }, [takeForm]);

  const handleButtonClick = (index) => {
    return () => {
      const newForms = [...takeForm];
      newForms[index].value = inputValue;
      // console.log(newForms, indexForm);
      setIndexForm(indexForm => indexForm + 1);
      if (indexForm > 4) {
        setIndexForm(0);
        setValue(2);
      }
      setInputValue('');
    };
  };

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
            className="rounded-md m-auto w-1/2 border-none"
            autoComplete="off"
            type="text"
            id="currentsection"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={placeHolder[indexForm].text}
          />
          <button className="flex hover:bg-fuchsia-200 bg-white rounded-md w-1/2 p-1 
        items-center justify-center" onClick={handleButtonClick(indexForm)}>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </motion.div>

  );
};


export default Form;