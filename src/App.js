import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Navbar from "./Navbar";

const App = () => {
  const Name = () => {
    return <h1> HELLO, WELCOME TO NAME PAGE </h1>
  }
  return  (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/contact/name' element={<Name/>} />
        <Route path='/about' element={<About/>} />
        <Route path ="*" element={<Error/>}/>
      </Routes>

    </>
  )
}

export default App;
