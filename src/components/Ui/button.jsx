import React from 'react';

const Button = ({ children, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-violet-600 hover:bg-violet-950 text-white font-semibold py-2 px-4 rounded-2xl shadow-md transition duration-300 ease-in-out transform hover:scale-102 ${className}`}
    >
      {children}
    </button>
  );
};  

export default Button;
