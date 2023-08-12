// TextEditor.js

import React, { useState } from 'react';

function TextEditor({ activeButton, text, rows, columns, isSubmitted,renderInputFields,handleInputChange, handleSubmit, handleSave, handleRowsSave,handleColumnsChange, handleRowsChange }) {


  return (
    <div className="rounded-lg bg-gray-200 shadow-xl w-2/5">
      <div className="py-8 px-4">
        {activeButton === 1 && (
          <div>
            <input className="rounded-lg py-2 px-4" type="text" value={text} onChange={handleInputChange} />
            <div className="py-4">
              <button className="rounded-lg px-6 py-2 bg-blue-500 text-white" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        )}

        {/* {activeButton === 2 && (
          <div>
            <form onSubmit={handleSave}>
              <div className=" py-2 flex flex-col justify-center sm:py-2">
                <div className="relative py-2 sm:max-w-xl sm:mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-12 sm:rounded-3xl"></div>
                  <div className="relative px-1 py-3 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-sm mx-auto">
                      <div className="divide-y divide-gray-200">
                        <div className="py-3 text-base leading-3 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                          <div className="relative">
                            <input
                              className='peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600'
                              type="number"
                              value={rows}
                              onChange={handleRowsChange} />
                            <label
                              for="email"
                              className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                            >
                              Rows
                            </label>
                          </div>
                          <div className="relative">
                            <input
                              className='peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600'
                              type="number"
                              value={columns}
                              onChange={handleColumnsChange} />
                            <label
                              for="password"
                              className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                            >
                              Columns
                            </label>
                          </div>
                          <div className="relative">
                            <button type='submit' className="bg-blue-500 text-white rounded-md px-2 py-1">
                              ADD
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </form>

            <div className='py-4'>
              {isSubmitted && renderInputFields()}
              {isSubmitted &&<div className='py-2'>
                <button onClick={handleRowsSave} className='rounded-lg px-6 py-2 bg-blue-500 text-white'>
                Submit
                </button>
              </div>}
            </div>
          </div>
        )} */}

        {activeButton===2&&(<>
        
        </>)}

        {activeButton === 3 && (
          <>
            Border
            <div className='border px-8 py-10 border-black'>Border</div>
          </>
        )}

        {activeButton === 4 &&
          (<div className='text-3xl'><GrCheckboxSelected /></div>
          )}

      </div>
    </div>
  );
}

export default TextEditor;
