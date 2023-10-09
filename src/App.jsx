import { useEffect, useState } from "react";

import { Begin } from "./components/Begin";
import { CopyForm } from "./components/CopyForm";
import { Form } from "./components/MainForm";

export function App() {

  const [stageForm, setStageForm] = useState(0);
  const [forms, setForms] = useState([
    { text: 'Ник: ', value: '' },
    { text: 'STEAMID: ', value: '' },
    { text: 'Дата и время: ', value: '' },
    { text: 'Развёрнутое описание: ', value: '' },
    { text: 'Док-ва: ', value: '' },
    { text: 'Ссылка на ваш стим профиль: ', value: '' },
  ]);

  function ChangeScene() {
    const components = [
      <Begin
        setValue={setStageForm}
        setTakeForm={setForms}
      />,
      <Form
        takeForm={forms}
        setValue={setStageForm}
      />,
      <CopyForm
        takeForm={forms}
        setValue={setStageForm}
      />
    ];
    return components[stageForm];
  }

  useEffect(() => {
  }, [stageForm]);

  return (
    <>

      <div className="flex justify-center ml-1/2 
        items-center h-screen w-screen 
        align-middle 
        bg-gradient-to-r from-indigo-600 to-pink-500 
        place-items-center justify-items-center font-bold " key={5}>
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
        <ChangeScene />
        <h1 className="absolute bottom-0 opacity-70 mb-2 rounded-full p-2">Created By <a href="https://t.me/themm_s" className="underline text-blue-400 hover:text-white duration-150">Themms (Telegram)</a></h1>
      </div>
    </>
  );
}