import { faRepeat } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { CopyButton } from "../ui/CopyButton/CopyButton";
import { CopyDiv } from "../components/CopyDiv/CopyDiv";
import Button from "../ui/Button/Button";

export function CopyForm({ takeForm, setValue }) {
  const arrSort = takeForm.map((obj, index) => `${index + 1}. ${obj.text} ${obj.value}
`);
  const [text, setText] = useState('Копировать');

  const Changetext = () => {
    setText('Скопировано!');
    setTimeout(() => {
      setText('Копировать');
    }, 2000);
  };

  function copyText() {
    navigator.clipboard.writeText(arrSort.join(''));
    Changetext();
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
          text={text}
        />
        <div className="flex justify-center">
          <Button atag={true} className="cursor-pointer" onClick={() => window.open('https://f.unionrp.info/forums/applications_city17/post-thread', "_blank")}>
            Форма С17
          </Button>
          <Button atag={true} className="cursor-pointer" onClick={() => window.open('https://f.unionrp.info/forums/applications_city2/post-thread', "_blank")}>
            Форма С2
          </Button>
        </div>
      </CopyDiv>
    </>
  );
};