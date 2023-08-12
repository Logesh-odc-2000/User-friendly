import React, { useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function Table({ activeButton, isOpen1, closeModal }) {

    const [selectedRows, setSelectedRows] = useState();
    const [selectedColumns, setSelectedColumns] = useState();
    const [startingCell, setStartingCell] = useState({ rowIndex: null, columnIndex: null });

    const handleCellHover = (rowIndex, columnIndex) => {
        if (startingCell.rowIndex !== null && startingCell.columnIndex !== null) {
            setSelectedRows(Math.abs(rowIndex - startingCell.rowIndex) + 1);
            setSelectedColumns(Math.abs(columnIndex - startingCell.columnIndex) + 1);
        }
    };

    const handleCellClick = (rowIndex, columnIndex) => {
        setStartingCell({ rowIndex, columnIndex });
    };

    const handleTableMouseMove = (event) => {
        if (startingCell.rowIndex !== null && startingCell.columnIndex !== null) {
            const boundingRect = event.currentTarget.getBoundingClientRect();
            const cellWidth = boundingRect.width / 10;
            const cellHeight = boundingRect.height / 10;

            const columnIndex = Math.floor((event.clientX - boundingRect.left) / cellWidth);
            const rowIndex = Math.floor((event.clientY - boundingRect.top) / cellHeight);

            handleCellHover(rowIndex, columnIndex);
        }
    };


    return (
        <div>{activeButton === 2 && (<div>
            <Transition appear show={isOpen1} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-2 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-10px max-w-md transform overflow-hidden rounded-2xl bg-white p-2 text-left align-middle shadow-xl transition-all">
                                    <div>
                                        <table className="hoverable border-collapse border-2 border-gray-500" onMouseMove={handleTableMouseMove}>
                                            <tbody>
                                                {Array.from({ length: 10 }, (_, rowIndex) => (
                                                    <tr key={rowIndex}>
                                                        {Array.from({ length: 10 }, (_, columnIndex) => (
                                                            <td
                                                                key={columnIndex}
                                                                onClick={() => handleCellClick(rowIndex, columnIndex)}
                                                                className={
                                                                    `${rowIndex >= startingCell.rowIndex &&
                                                                        rowIndex < startingCell.rowIndex + selectedRows &&
                                                                        columnIndex >= startingCell.columnIndex &&
                                                                        columnIndex < startingCell.columnIndex + selectedColumns
                                                                        ? 'selected-cell '
                                                                        : ''
                                                                    }border border-slate-300`
                                                                }

                                                            >
                                                                <div className='px-2 py-2'></div>
                                                            </td>
                                                        ))}
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>

                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>)}
        <table>
          <tbody>
            {Array.from({ length: selectedRows }, (_, rowIndex) => (
              <tr key={rowIndex}>
                {Array.from({ length: selectedColumns }, (_, columnIndex) => (
                  <td key={columnIndex} className='py-2 px-4 border-2 border-gray-800'>Cell</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        </div>
    )
}
