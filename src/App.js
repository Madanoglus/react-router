import React, { Component } from 'react'
import Navbar from './Component/Navbar'
import Anasayfa from './Component/Anasayfa'
import Bilgilendirme from './Component/Bilgilendirme'
import Dileksikayet from './Component/Dilekşikayet'
import {Routes, Route} from "react-router-dom"


import './App.css'

class App extends Component {
  render() {
    return (
      <div className="Context">
        <Navbar />    
        <Routes>          
        <Route path='/' element={<Anasayfa />} />          
        <Route path='/Bilgilendirme' element={<Bilgilendirme />} />          
        <Route path='/Dileksikayet' element={<Dileksikayet />} />          
      </Routes>
      </div>
    )
  }
}

export default App
