import * as React from "react";
import "../index.css"
import Nav from "./components/navbar";
import Footer from "./components/footer";
import Question from "./components/question";


function CreateSurvey() {
  return (
   <div className="bg-black ">
      <Nav/>
      <div className="flex flex-col items-center">
      <div className="mt-10 text-4xl font-bold text-center text-white">
        Creer un Sondage:
      </div>
      
      <input type="text" placeholder="Title" className="justify-center items-center px-16 py-2 mt-8 max-w-full text-2xl font-bold text-center bg-white rounded-[50px] w-[521px] max-md:px-5"/>
      
      <textarea type="text" placeholder="Description" className="justify-center items-center px-16 py-5 mt-8 max-w-full text-2xl font-bold text-center whitespace-nowrap bg-white rounded-[50px] w-[521px] max-md:px-5"/>
      
      <div className="grid grid-cols-2 flex gap-5 items-center mt-12 w-full text-2xl font-bold max-w-[1141px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <Question/>
        

        
      </div>
      <div className="flex gap-5 items-center font-bold max-w-[1141px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full mt-5">
        <button className="grow justify-center items-center px-16 py-2 whitespace-nowrap bg-green-500 rounded-[50px] w-fit max-md:px-5">
          Done
        </button>
        <button className="justify-center px-7 py-2 bg-white rounded-[50px] max-md:px-5">
          Ajouter une question
        </button>
      </div>  
      <div>
      </div>
      </div>
      <Footer/>
    </div>
  );
}
export default CreateSurvey;

