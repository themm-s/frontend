import { useEffect, useState } from "react";

import { Begin } from "./pages/Begin";
import { CopyForm } from "./pages/CopyForm";
import { Form } from "./pages/MainForm";
import { AppDiv } from "./components/AppDiv/AppDiv";

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
    <AppDiv>
      <ChangeScene />
      <h1 className="absolute bottom-0 opacity-70 text-white mb-2 rounded-full p-2">
        Created By
        <a className="text-blue-400">
          themm_s (Discord)
        </a>
      </h1>
    </AppDiv>
  );
}