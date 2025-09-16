import { useState } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Nodes from './components/Nodes'
import Protocol from './components/Protocol'
import NotFoundPage from './components/NotFoundPage'
import './App.css'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import ToastContainer from './components/ToastContainer'

function App() {

  return (
    <>
    <Header />
    <ToastContainer />
    <div>
      <Routes>
        <Route path='/CopLandOS/home' element={<Home />} />
        <Route path='/CopLandOS/nodes' element={<Nodes />} />
        <Route path='/CopLandOS/protocol' element={<Protocol />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
    </>
  )
}

export default App
