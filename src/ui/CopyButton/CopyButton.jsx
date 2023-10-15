import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CopyButton = ({ onClick, onClickIcon, icon }) => {
  return (
    <>
      <button className='border-solid hover:cursor-pointer transition ease-in-out duration-300
        hover:bg-gray-900 hover:bg-opacity-50 hover:text-white rounded-lg w-full p-1 border-2 
          items-center text-center 
          align-middle' onClick={onClick}>
        Копировать
      </button>
      <FontAwesomeIcon className='flex m-auto w-15 rounded-full 
        transition transform hover:rotate-180 
        ease-in-out duration-500 
        bg-opacity-50 hover:bg-gray-900 hover:text-white mt-5 shadow-md shadow-gray-800 bg-gray-600 p-2 
        hover:cursor-pointer' onClick={onClickIcon} icon={icon} />
    </>
  );
};