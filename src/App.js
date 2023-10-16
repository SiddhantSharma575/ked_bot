import React from 'react'
import AuthScreen from './screens/Auth/AuthScreen'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeScreen from './screens/Home/HomeScreen'
import ChatScreen from './screens/Chat/ChatScreen'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AuthScreen />} />
        <Route path='/chats' element={<HomeScreen />} />
        <Route path='/chat/:id' element={<ChatScreen />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App