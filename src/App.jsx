import Begin from "./components/Begin";
import React from "react";
import Form from "./components/Form";

function Main() {

  return (
    <>
      <div className="flex justify-center ml-1/2 items-center h-screen w-screen 
        align-middle 
        bg-gradient-to-r from-indigo-600 to-pink-500 
        place-items-center justify-items-center font-bold 
        rounded-xl">
        {/* <Begin /> */}
        <Form />
      </div>
    </>

  )
}

export default Main;