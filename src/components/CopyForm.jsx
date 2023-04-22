import React from 'react';

function CopyForm({ takeForm, setTakeForm }) {
    console.log(takeForm)

    return (
        <>
            <div>
                {takeForm.map((form, index) => (
                    <h1 key={index}>
                        <br />
                        {form.text}
                        <button
                            key={index}
                            type="text"
                            className="justify-end items-end text-end"
                        >
                            {form.value}
                        </button>
                    </h1>
                ))}

            </div>
        </>
    );
};

export default CopyForm;