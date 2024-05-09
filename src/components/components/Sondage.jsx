import React from 'react'
import { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";


function Sondage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleToggle = () => {
    setIsDropdownOpen((prevState) => !prevState);
};
const Data = [{}]
  return (
    <>
    
    <button 
      className="flex flex-col justify-center  px-16 py-px mt-12 max-w-full text-2xl font-bold text-center bg-white rounded-3xl w-[1097px] max-md:px-5 max-md:mt-10"
      onClick={handleToggle}
      >
        <div className="flex gap-5 items-center ml-10 max-w-full w-[642px] max-md:flex-wrap">
          <div className="flex-auto self-stretch my-auto">
            Meeting time
          </div>
          <div className="shrink-0 self-stretch w-px bg-black border border-black border-solid h-[113px]" />
            <div className="flex-auto self-stretch my-auto ">
              Meeting about React project
            </div>
          </div>
          {isDropdownOpen}
        </button>
        {isDropdownOpen && (
        <div className="justify-center rounded-t-none px-16 py-px mt-[-25px] max-w-full text-2xl font-bold text-center bg-white rounded-3xl w-[1097px] max-md:px-5 max-md:mt-10">
          <div className="justify-center items-center px-16 py-2 mt-8 max-w-full text-2xl font-bold text-center bg-black rounded-[50px] w-[521px] max-md:px-5"></div>
          <div className="justify-center items-center px-16 py-5 mt-8 max-w-full text-2xl font-bold text-center whitespace-nowrap bg-black rounded-[50px] w-[521px] max-md:px-5"></div>

        </div>)}
        


   
    </>
  )
}

export default Sondage