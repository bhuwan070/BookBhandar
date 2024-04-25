import React from 'react'
import Home from './home/Home'
import Courses from './courses/Courses'
import { Route, Routes } from 'react-router-dom'
import SignUp from './components/SignUp'
import Contact from './contact/Contact'


const App = () => {
  return (
    <>

      <div className=' dark:bg-slate-900 dark:text-white'>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/signupp" element={<SignUp />} />
          <Route path="/contact" element={<Contact />} />



        </Routes>

      </div>




    </>
  )
}

export default App