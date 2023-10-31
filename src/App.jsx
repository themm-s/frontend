import { useEffect, useState } from "react";

import { Begin } from "./components/Home/Begin";
import { CopyForm } from "./components/Home/CopyForm";
import { Form } from "./components/Home/MainForm";
import { AppDiv } from "./components/AppDiv/AppDiv";
import { TechWorks } from "./components/TechWorks/TechWorks";
import { socket } from "./components/Home/Begin";

export function App() {

  const [stageForm, setStageForm] = useState(0);
  const [techWorks, setWorks] = useState(false);
  const [forms, setForms] = useState([
    { text: 'Ник: ', value: '' },
    { text: 'STEAMID: ', value: '' },
    { text: 'Дата и время: ', value: '' },
    { text: 'Развёрнутое описание: ', value: '' },
    { text: 'Док-ва: ', value: '' },
    { text: 'Ссылка на ваш стим профиль: ', value: '' },
  ]);

  socket.on('techWorks', (stateTech) => {
    if (stateTech !== techWorks) {
      setWorks(techWorks);
    }
    return;
  });

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
      {
        techWorks ?
          <TechWorks />
          :
          <ChangeScene />
      }
      <h1 className="absolute bottom-0 opacity-70 text-white mb-2 rounded-full p-2">
        Created By
        <a className="text-blue-400">
          &nbsp;themm_s (Discord) <a className="underline text-yellow-300" href="https://yoomoney.ru/to/4100118407545324">Поддержать</a>
        </a>
      </h1>
    </AppDiv>
  );
}