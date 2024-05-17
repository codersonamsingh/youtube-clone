import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home/Home"
import Video from './Pages/Video/Video'

const App = () => {

  const [Sidebar,setSidebar] = useState(true);



  return (

    <div>
      <Navbar setSidebar={setSidebar}/>
      <Routes>
        <Route path='/' element={<Home Sidebar={Sidebar}/>} />
        <Route path='/video/:categoryId/:videoId' element={<Video/>} />
      </Routes>


    </div>
  )
}

export default App