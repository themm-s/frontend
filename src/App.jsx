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
    console.log(stageForm);
  }, [stageForm]);

  return (
    <>
      <div className="flex justify-center ml-1/2 
        items-center h-screen w-screen 
        align-middle 
        bg-gradient-to-r from-indigo-600 to-pink-500 
        place-items-center justify-items-center font-bold 
        rounded-xl" key={5}>
        <ChangeScene />
      </div>
    </>
  );
}