import Begin from "./components/Begin";
import React, { useState } from "react";
import Form from "./components/Form";
import CopyForm from "./components/CopyForm";

function Main() {

  const [stageForm, setStageForm] = useState(0)

  function ChangeScene() {
    if (stageForm == 0) {
      return (
        <Begin value={stageForm} setValue={setStageForm} />
      )
    } else if (stageForm == 1) {
      return (
        <Form value={stageForm} setValue={setStageForm} />
      )
    } else {
      return (
        <CopyForm />
      )
    }
  }

  return (
    <>
      <div className="flex justify-center ml-1/2 items-center h-screen w-screen 
        align-middle 
        bg-gradient-to-r from-indigo-600 to-pink-500 
        place-items-center justify-items-center font-bold 
        rounded-xl">
          <ChangeScene/>
      </div>
    </>

  )
}

export default Main;