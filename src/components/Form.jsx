import React, { useState } from 'react';
import { motion } from "framer-motion";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Form = () => {
    const [indexForm, setIndexForm] = useState(0);

    const forms = [
        { text: 'Ник: ', value: 'Themms' },
        { text: 'STEAMID: ', value: 'STEAMID_594396743' },
        { text: 'Дата и время: ', value: '' },
        { text: 'Развёрнутое описание: ', value: '' },
        { text: 'Док-ва: ', value: '' },
        { text: 'Сслыка на ваш стим профиль: ', value: '' },
    ]

    function Formtext() {
        return (
            <h1>{forms[indexForm].text}</h1>
        )
    }

    function changeIndexForm() {
        setIndexForm(indexForm => indexForm + 1)
        console.log(indexForm)
        if (indexForm > 4) {
            setIndexForm(0)
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
            }}
            className="flex justify-center ml-1/2 items-center h-screen w-screen 
        align-middle 
        bg-gradient-to-r from-indigo-600 to-pink-500 
        place-items-center justify-items-center font-bold rounded-xl"
        >
            <div className='rounded-md w-1/2 h-1/2 p-2'>
                <ul className="grid content-between h-72 font-black">
                    {forms.map((form, index) => (
                        <li key={index}>
                            <br />
                            {form.text}
                            <button key={index}
                                type="text"
                                className="justify-end items-end text-end"
                            >
                                {form.value}
                            </button>
                            <hr />
                        </li>
                    ))}

                </ul>
                <div className="grid grid-cols-1 gap-1 place-items-center h-20">
                    <div className='mt-3'>
                        <Formtext/>
                    </div>
                    <input className="rounded-md m-auto w-1/2 border-none" type="text" id="currentsection" />
                    <button className="flex bg-white rounded-md w-1/2 p-1 
        items-center justify-center" onClick={changeIndexForm}>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
            </div>
        </motion.div>

    );
};

export default Form;