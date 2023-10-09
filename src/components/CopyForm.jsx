import { faRepeat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export function CopyForm({ takeForm, setValue }) {
  const [showText, setShowText] = useState(false);
  const arrSort = takeForm.map((obj, index) => `${index + 1}. ${obj.text} ${obj.value}
`);

  function copyText() {
    navigator.clipboard.writeText(arrSort.join(''));
    setShowText(true);
    setTimeout(() => {
      setShowText(false);
    }, 2000);
  };

  function repeatForm() {
    setValue(0);
  }

  return (
    <>
      <div id='copy' className="p-7 bg-white text-gray-200 bg-opacity-10 rounded-2xl w-1/2 shadow-xl">
        {takeForm.map((form, index) => (
          <>
            <h1 key={index} className="break-words w-full max-w-2xl">
              {index + 1}. {form.text}
              <button
                type="text"
                className="break-words justify-end items-end text-end"
              >
                {form.value}
              </button>
            </h1>
            <br />
          </>
        ))}
        <button className='border-solid hover:cursor-pointer transition ease-in-out duration-300
        hover:bg-indigo-600 hover:bg-opacity-10 hover:text-white rounded-lg w-full p-1 border-2 
          items-center text-center border-violet-500 
          align-middle' onClick={copyText}>
          Копировать
        </button>
        <FontAwesomeIcon className='flex m-auto w-15 rounded-full 
        transition transform hover:rotate-180 
        ease-in-out duration-500 
        bg-opacity-50 hover:text-black
        bg-indigo-500 hover:bg-indigo-400 p-2 mt-3 
        hover:cursor-pointer' onClick={repeatForm} icon={faRepeat} />
        {showText && <p className="text-center">Текст скопирован!</p>}
      </div>
    </>
  );
};