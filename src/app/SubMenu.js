import React, { useState } from 'react';
import { Fragment } from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { useDispatch } from 'react-redux';
import { CgAdd } from "react-icons/cg";
import Action from './store/action'
import { FiDelete } from "react-icons/fi";
import { MdOutlineEdit } from "react-icons/md";


function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

const { Addnest, Delete} = Action;
const SubMenu = ({ item, index ,onEditMenu,onEditChild, onDeleteChild}) => {


  const [ChildIndex,setChildIndex]=useState(null);
  const [isChild, setIsChild] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState("");
    const Dispatch = useDispatch();

    const handleSubmit = () => {
        if (inputValue.trim() !== "") {
          if (editMode) {
            if (isChild) {
                onEditChild(index, ChildIndex, inputValue);
              } else {
                onEditMenu(index, inputValue);
              }
            } 
          else {
            Dispatch(Addnest(index, inputValue));
          }
          setShowInput(false);
          setEditMode(false);
          setIsChild(false); // Reset the isChild state after handling the edit
        }
      };
    const handleDeleteparent = (parentIndex) => {   
        Dispatch(Delete(parentIndex))
    }


    const handleDeleteChild = (childIndex) => {
        onDeleteChild(index, childIndex);
      };
    const handleEditparent = () => {
        setInputValue(item.name);
        setShowInput(true);
        setEditMode(true);
      };
    
      const handleEditChild = (childName,isChild,childIndex) => {
        setInputValue(childName);
        setShowInput(true);
        setEditMode(true);
        setIsChild(isChild);
        setChildIndex(childIndex)
      };
    



    return (
        <div className='py-2'>
            <li key={item.name} className="rounded-lg px-3 py-1  bg-gray-300 ">
                <Disclosure as="div">
                    {({ open }) => (
                        <>
                            <Disclosure.Button
                                className={classNames(
                                    'flex items-center w-full text-left rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold',
                                    open ? 'shadown  text-black-400' : 'text-black-400'
                                )}
                            >
                                <ChevronRightIcon
                                    className={classNames(
                                        open ? 'rotate-90 text-gray-500' : 'text-gray-400',
                                        'h-5 w-5 shrink-0'
                                    )}
                                    aria-hidden="true"
                                />
                                <span>{item.name}</span>
                                <button className='ml-auto h-5 w-5 shrink-0 ' onClick={() =>{ setShowInput(!showInput);setEditMode(false);setInputValue("");} }>
                                    <CgAdd className="text-xl " />
                                </button>

                                <button onClick={handleEditparent}><MdOutlineEdit className='text-1xl'/></button>


                                <button  onClick={() => handleDeleteparent(index)}>
                                <FiDelete className='text-1xl' />
                                </button>

                                
                            </Disclosure.Button>
                            {showInput && (
                                <div className="px-2 mt-2">
                                    <input
                                        type="text"
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        placeholder="Enter Menu Name"
                                        className="border inline-block border-gray-300 w-48 py-1 px-2 rounded"
                                    />
                                    <div className="mt-2">
                                        <button
                                            className="rounded-lg px-3 py-1 bg-blue-500"
                                            onClick={handleSubmit}
                                        >
                                            Save
                                        </button>
                                    </div>
                                </div>
                            )}
                            <Disclosure.Panel className="mt-1 px-2 space-y-1">
                                {item.children.map((childItem, childIndex) => (
                                    <li key={childIndex} className="rounded-lg px-4 py-2 bg-gray-200 rounded-xl flex justify-around">
                                        <span> {childItem.name}</span>

                                        <button  onClick={() => handleEditChild(childItem.name,childIndex)}><MdOutlineEdit className='text-1xl'/></button>

                                        <button type="button" onClick={() => handleDeleteChild(childIndex)}>
                                            <FiDelete className='text-1xl' />
                                        </button>


                                    </li>
                                ))}
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </li>
        </div>
    );
};

export default SubMenu;
