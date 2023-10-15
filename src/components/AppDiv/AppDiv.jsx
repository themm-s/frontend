export const AppDiv = ({ children }) => {
  return (
    <div className="flex justify-center ml-1/2 
        items-center h-screen w-screen 
        align-middle 
        bg-gradient-to-tr from-black to-gray-600
        place-items-center justify-items-center font-bold " key={5}>
      <a href="https://unionrp.info" className="absolute top-0 right-0">
        <img className="hidden md:block" src="https://unionrp.info/static/images/logo.webp" alt="Union RP" height="50" />
      </a>
      {children}
    </div>
  );
};