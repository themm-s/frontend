type TProps = {
  placeholder: string;
  onInput: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className: string;
};

export const Input: React.FC<TProps> = ({ placeholder, onInput, className }) => {
  return (
    <textarea className={`border-2 rounded text-sm text-white px-2 py-0.5 bg-black bg-opacity-0 outline-none 
    border-black placeholder:text-left break-words resize-none w-full ${className}`}
      placeholder={placeholder}
      onInput={onInput}
      maxLength={300}
    />
  );
};