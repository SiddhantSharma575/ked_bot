import React, { useState } from 'react'
import AuthScreen from './screens/Auth/AuthScreen'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeScreen from './screens/Home/HomeScreen'
import ChatScreen from './screens/Chat/ChatScreen'
import { AuthContext } from './context/AuthContext'


const App = () => {
  const [user,setUser] = useState(null)
  return (
    <>
    <AuthContext.Provider value={{user,setUser}}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AuthScreen />} />
        <Route path='/chats' element={<HomeScreen />} />
        <Route path='/chat/:id' element={<ChatScreen />} />
      </Routes>
    </BrowserRouter>
    </AuthContext.Provider>
    </>
  )
}

export default App