import { useRef } from "react";

type TProps = {
  placeholder: string;
  onInput: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className: string;
  offer: React.RefObject<HTMLTextAreaElement>;
};

export const Input: React.FC<TProps> = ({ placeholder, onInput, className, offer }) => {
  return (
    <textarea className={`border-2 rounded text-sm text-white px-2 py-0.5 bg-black bg-opacity-0 outline-none 
    border-gray-600 placeholder:text-left break-words resize-none w-full ${className}`}
      placeholder={placeholder}
      onInput={onInput}
      ref={offer}
      maxLength={300}
    />
  );
};