import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import QuestionComponent from "./questionComponent";

import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection } from 'firebase/firestore';
import { db } from '../../fireBase/fireBase';

const Data = [
  {
    "title": "meeting",
    "description": "react project meeting",
    "questions": [
      {
        "question": "what is your fav thing",
        "choix": ["Blue", "Spring", "Gaming"]
      }]

  }
];

function Sondage({ titre, description }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleToggle = () => {
    setIsDropdownOpen(prevState => !prevState);
  };


  return (
    <div className="flex justify-center items-center h-screen"> {/* Centering container */}
      <button
        className="flex flex-row justify-center px-16 py-px mt-12 max-w-full text-2xl font-bold text-center bg-white rounded-3xl w-[1097px] max-md:px-5 max-md:mt-10"
        onClick={handleToggle}
      >
        <div className="flex gap-5 items-center ml-10 max-w-full w-[642px] max-md:flex-wrap">
          <div className="flex-auto self-stretch my-auto">
            {titre}
          </div>
          <div className="shrink-0 self-stretch w-px bg-white border border-black border-solid h-[113px]" />
          <div className="flex-auto self-stretch my-auto">
            {description}
          </div>
        </div>
        {isDropdownOpen}
      </button>
      {isDropdownOpen && (
        <div className="justify-center flex-row rounded-t-none px-16 pt-8 py-px mt-[-25px] max-w-full text-xl text-center bg-white rounded-3xl w-[1097px] max-md:px-5 max-md:mt-10">
          <div className="flex flex-col items-center justify-center mb-12">
            <div className="px-16 py-2 mt-8 text-2xl font-bold text-white rounded-full bg-black w-[521px] max-md:px-5">
              {titre}</div>
            <div className="px-16 py-2 mt-8 text-2xl font-bold text-white rounded-full bg-black w-[521px] max-md:px-5">{description}</div>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-8 mb-4 max-w-[800px]">
              {Data.map((item, index) => (
                <QuestionComponent
                  key={index}
                  questions={questions}
                  choix={choix}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sondage;
