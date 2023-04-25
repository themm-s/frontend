import React from 'react';

function CopyForm({ takeForm, setTakeForm }) {
    console.log(takeForm)

    return (
        <>
            <div className="p-5 bg-white rounded-2xl">
                {takeForm.map((form, index) => (
                    <>
                    <h1 key={index}>
                        {form.text}
                        <button
                            key={index}
                            type="text"
                            className="justify-end items-end text-end"
                        >
                            {form.value}
                        </button>
                    </h1>
                    <br/>
                    </>
                ))}

            </div>
        </>
    );
};

export default CopyForm;