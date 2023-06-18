import Begin from "./components/Begin";
import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import CopyForm from "./components/CopyForm";

function App() {

  const [stageForm, setStageForm] = useState(0);
  const [todoItems, setTodoItems] = useState([]);
  const [forms, setForms] = useState([
    { text: 'Ник: ', value: '' },
    { text: 'STEAMID: ', value: '' },
    { text: 'Дата и время: ', value: '' },
    { text: 'Развёрнутое описание: ', value: '' },
    { text: 'Док-ва: ', value: '' },
    { text: 'Ссылка на ваш стим профиль: ', value: '' },
  ]);

  useEffect(() => {
    fetch('http://localhost:3010/api/form')
      .then((res) => res.json())
      .then((result) => setTodoItems(result.data));
  }, []);

  function ChangeScene() {
    const components = [
      <Begin
        value={stageForm}
        setValue={setStageForm}
        setTakeForm={setForms}
        takeForm={forms}
      />,
      <Form
        value={stageForm}
        takeForm={forms}
        setTakeForm={setForms}
        setValue={setStageForm}
      />,
      <CopyForm
        value={stageForm}
        takeForm={forms}
        setTakeForm={setForms}
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

export default App;