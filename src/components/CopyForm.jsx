import { faRepeat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";

export function CopyForm({ takeForm, setValue }) {
  const buttonRef = useRef(null);
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

  useEffect(() => {
    console.log(buttonRef.current);
  }, []);

  return (
    <>
      <div id='copy' className="p-5 bg-white rounded-2xl w-1/2">
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
            <hr />
            <br />
          </>
        ))}
        <div className='border-solid hover:cursor-pointer hover:bg-indigo-600 hover:text-white hover:border-black rounded-lg w-full p-1 border-2 
          items-center text-center border-violet-500 
          align-middle' onClick={copyText}>
          Копировать
        </div> <FontAwesomeIcon className='hover:cursor-pointer' onClick={repeatForm} icon={faRepeat} />
        {showText && <p>Текст скопирован!</p>}
      </div>
    </>
  );
};