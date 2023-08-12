"use client"
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux'
import Action from './store/action'
import SubMenu from './SubMenu'


const { Add } = Action;


export default function Example() {

    const list = useSelector(state => state.navigation);
    console.log(list)
    const [showInput, setShowInput] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const Dispatch = useDispatch();


    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = () => {
        if (inputValue.trim() !== "") {
            Dispatch(Add({ name: inputValue }))
            setInputValue("");
            setShowInput(false);
        }
    };

    const onEditMenu = (menuIndex, newName) => {
        Dispatch(Action.Edit(menuIndex, newName));
    };

    const onEditChild = (menuIndex, childIndex, newName) => {
        Dispatch(Action.Editnest(menuIndex, childIndex, newName));
    };

    const onDeleteChild = (index, index1) => {
        Dispatch(Action.Deletenest(index, index1));
    };


    return (
        <>
            <div className="flex w-64 min-h-screen flex-col gap-y-5 overflow-y-auto border-r border-gray-200 px-6">
                <div className='py-6'>
                    <div className="flex h-16 items-center bg-white border-b border-gray-200  px-8">
                        <input type='text' className='rounded-lg bg-gray-300' />
                    </div>
                </div>
                <nav className="flex flex-1 flex-col">

                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <div className="relative">
                            {/* Add icon */}
                            <button
                                onClick={() => setShowInput(!showInput)}
                                className="flex bg-gray-400 items-center w-full text-left rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold text-gray-700"
                            > Menu
                                <AiOutlinePlus className='ml-auto h-5 w-5 shrink-0' />
                            </button>

                            {/* Dropdown container */}
                            {showInput && (
                                <div className="absolute   left-0 bg-white shadow-lg py-2 px-4 rounded-lg">
                                    <div className='inline-block'>
                                        <input
                                            type="text"
                                            value={inputValue}
                                            onChange={handleInputChange}
                                            className="border inline-block border-gray-300 w-48 py-1 px-2 rounded"
                                            placeholder="Input text here..."
                                        />
                                    </div>
                                    <div className='inline-block'>
                                        <button
                                            onClick={handleSubmit}
                                            className="mt-2 bg-blue-500 text-white   rounded-lg"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* Dropdown items */}

                            {list.map((item, index) => (
                                <SubMenu
                                    key={index}
                                    item={item}
                                    index={index}
                                    onEditMenu={onEditMenu}
                                    onEditChild={onEditChild}
                                    onDeleteChild={onDeleteChild}
                                />
                            ))}

                        </div>

                    </ul>

                </nav>
            </div>




        </>

    )
}       