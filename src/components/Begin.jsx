import { motion } from "framer-motion"
import React, { useState } from "react";
import Select from "react-select";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const options = [
    { value: 'admin', label: 'Жалоба на администратора' },
    { value: 'player', label: 'Жалоба на игрока' },
    { value: 'appeal', label: 'Заявка на разбан' }
]



const Begin = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    function changeIndex() {
        setCurrentIndex(currentIndex => currentIndex + 1)
        if (currentIndex > 2) {
            setCurrentIndex(currentIndex => currentIndex = 0)
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
            <Select
                options={options}
                className="w-1/5 h-[38px]"
                placeholder="Жалоба на..."
            />
            <button className="flex bg-white rounded-xl ml-2 
        h-[38px] w-10 p-2 
        items-center justify-center" onClick={changeIndex}>
                <FontAwesomeIcon icon={faArrowRight} />
            </button>
        </motion.div>
    );
};

export default Begin;