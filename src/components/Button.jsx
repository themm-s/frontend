import React from 'react';

const Button = ({children, ...props}) => {
  return (
      <button {...props} 
      className='flex bg-white rounded-xl ml-2 
      h-[38px] w-50 p-2 
      items-center justify-center'
      onClick={props.onClick}
      value={props.value}
      >
          {children}
      </button>
  );
};



export default Button;