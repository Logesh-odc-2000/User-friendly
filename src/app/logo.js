import React from 'react';
// import { BiText } from 'react-icons/bi';
import { BiText,BiSolidPhotoAlbum } from "react-icons/bi";
import { BsFillMenuButtonWideFill,BsTable } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import { TbInputSearch } from "react-icons/tb";
import { ImCheckboxChecked} from "react-icons/im";

function Logo({ handleButtonClick }) {
  const buttons = [
    { id: 1, icon: <BiText /> },
    { id: 2, icon: <BsTable/>},
    { id: 3, icon: <BsFillMenuButtonWideFill /> },  
    { id: 4, icon: <ImCheckboxChecked /> },
    
    
  ];

  return (
    <div >
      {buttons.map((button) => (
        <button
          key={button.id}
          onClick={() => handleButtonClick(button.id)}
          type="button"
        >
          <div className='w-10  h-6 mr-2'>
          {button.icon}
          </div>
        </button>
      ))}
    </div>
  );
}

export default Logo;
