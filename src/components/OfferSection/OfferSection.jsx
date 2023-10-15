export const OfferSection = ({ children }) => {
  return (
    <div className="absolute hidden md:block text-center text-lg rounded border 
      m-5 p-2 pb-5 overflow-hidden truncate text-gray-200 
      top-20 right-0 w-1/3 md:w-1/4 shadow-xl">
      {children}
    </div>
  );
};