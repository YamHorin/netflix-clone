import React from 'react'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home.jsx'
import Player from './pages/Player/Player.jsx'
import { Routes , Route } from 'react-router-dom'
import firebase from './fireBase/FireBase.js'
const App = () => 
  {
   const app_fire_base = new firebase()


  return (

    <div>
      <Routes>
        <Route path='/' element  = {<Home/>}></Route>
        <Route path='/Login' element  = {<Login firebase_class = {app_fire_base}/>}></Route>
        <Route path='/Player/:id_video' element  = {<Player/>}></Route>
      </Routes>
    </div>
  )
}

export default App