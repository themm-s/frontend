import { faRepeat } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { CopyButton } from "../ui/CopyButton/CopyButton";
import { CopyDiv } from "../components/CopyDiv/CopyDiv";

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
      <CopyDiv>
        {takeForm.map((form, index) => (
          <>
            <h1 key={index} className="break-words w-full max-w-2xl">
              {index + 1}. {form.text}
              <button
                key={index}
                type="text"
                className={`justify-start items-start text-start break-words 
                ${index == 3 && length > 50 ? "w-full" : ""
                  }`}
              >
                {form.value}
              </button>
            </h1 >
            <br />
          </>
        ))}
        <CopyButton
          onClick={copyText}
          onClickIcon={repeatForm}
          icon={faRepeat}
        />
        {showText && <p className="text-center">Текст скопирован!</p>}
      </CopyDiv>
    </>
  );
};