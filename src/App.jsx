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
        <a href="https://unionrp.info" className="absolute top-0 right-0">
          <img className="hidden md:block" src="https://unionrp.info/static/images/logo.webp" alt="Union RP" height="50" />
        </a>
        <ChangeScene />
        <h1 className="absolute bottom-0 opacity-70 text-white mb-2 rounded-full p-2">Created By <a className="text-blue-400">themm_s (Discord)</a></h1>
      </div>
    </>
  );
}