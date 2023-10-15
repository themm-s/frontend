export const CopyDiv = ({ children }) => {
  return (
    <div id='copy' className="flex space-y-3 truncate flex-col p-7 whitespace-nowrap bg-white text-gray-200 bg-opacity-10 rounded-2xl w-3/6 
      shadow-xl shadow-gray-800">
      {children}
    </div>
  );
};