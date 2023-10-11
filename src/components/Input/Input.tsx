type TProps = {
  placeholder: string;
};

export const Input: React.FC<TProps> = ({ placeholder }) => {
  return (
    <input className="border-2 text-white px-2 py-0.5 bg-black bg-opacity-0 outline-none 
    text-center border-black w-full" type="text" placeholder={placeholder} />
  );
};