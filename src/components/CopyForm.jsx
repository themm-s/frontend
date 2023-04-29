import React from 'react';
import { useState } from 'react';

function CopyForm({ takeForm, setTakeForm }) {
    console.log(takeForm)
    const [showText, setShowText] = useState(false);
    const arrSort = takeForm.map(obj => `${obj.text} ${obj.value}
    `)

    function copyText() {
        const copy = document.getElementById('copy').innerText;
        navigator.clipboard.writeText(arrSort.join(''));
        setShowText(true);
        setTimeout(() => {
            setShowText(false);
        }, 2000)
    };

    console.log(document.getElementById('copy'))
    
    console.log(arrSort.join(''))

    return (
        <>
            <div id='copy' className="p-5 bg-white rounded-2xl w-1/2">
                {takeForm.map((form, index) => (
                    <>
                        <h1 key={index} className="break-words w-full max-w-2xl">
                         {form.text}
                            <button
                                key={index}
                                type="text"
                                className="break-words justify-end items-end text-end"
                            >
                                {form.value}
                                
                            </button>
                        </h1>
                        <hr />
                        <br />
                    </>
                ))}
                 <button className="border-solid w-full p-1 border-2 
                 items-center text-center border-violet-500 align-middle" onClick={copyText}>Копировать</button>
                {showText && <p>Текст скопирован!</p>}
            </div>
        </>
    );
};

export default CopyForm;