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
        bg-gradient-to-tr from-black to-gray-600
        place-items-center justify-items-center font-bold " key={5}>
        <ChangeScene />
        <h1 className="absolute bottom-0 opacity-70 text-white mb-2 rounded-full p-2">Created By <a href="https://t.me/themm_s" className="underline text-blue-400 hover:text-white duration-150">Themms (Telegram)</a></h1>
      </div>
    </>
  );
}