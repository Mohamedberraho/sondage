import React from 'react'
import Nav from './components/navbar'
import Footer from './components/footer'
import Sondage from './components/Sondage'

function Survey() {
  return (
    <>
    <div className="bg-black h-screen">
    <Nav/>
    <div className="grid place-items-center">
         <Sondage/>
        <Sondage/>
        <Sondage/>
    </div>
   
    <Footer/>
     </div>
    </>
  )
}

export default Survey