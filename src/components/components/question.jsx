import React from 'react'
import "../../index.css";

function Question() {
  return (
    <>
    <div className="bg-black flex justify-center align-center items-center mx-auto">
    <div className="w-full max-w-md px-4">
    <input
        type="text"
        placeholder="Question 1"
        className="justify-center items-center px-10 py-2 bg-white rounded-[50px] w-[500px] max-md:px-5 max-md:max-w-full" 
    />

    <div className="flex flex-col space-y-4 items-start mt-5 w-full text-2xl font-bold text-center max-w-[1030px] max-md:flex-wrap max-md:max-w-full">
        <input
            type="text"
            placeholder="Choix 1"
            className=" px-16 py-2 bg-white rounded-[50px] w-3/3 max-md:px-5" 
        />

        <input
            type="text"
            placeholder="Choix 2"
            className=" px-16 py-2 bg-white rounded-[50px] w-3/3 max-md:px-5" 
        />
        <button className="items-center align-center justify-center px-16 bg-white rounded-[50px] max-md:px-5">Ajouter Choix</button>
    </div>
    </div>
</div>

    </>
  )
}

export default Question