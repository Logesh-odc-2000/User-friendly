// IconButtons.js

import React from 'react';

function IconButtons({ activeIcon, buttonConfigs, handleButtonClick }) {
  return (
    <div className="bg-gray-600 p-14 w-3/4 rounded-lg">
      <div>
        {activeIcon && (
          <div className="flex justify-center items-center">
            <div className="flex text-black flex-rows rounded-lg bg-white shadow-xl h-10">
              {buttonConfigs.map((button, index) => (
                <button
                  key={index}
                  className={`text-2xl px-4 ${
                    index < buttonConfigs.length - 1 ? 'border-r-4 border-gray-300' : ''
                  }`}
                  onClick={button.onClick}
                >
                  {button.icon}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default IconButtons;
