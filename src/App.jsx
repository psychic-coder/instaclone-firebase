
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import AuthPage from './pages/AuthPage/AuthPage'
import PageLayout from './Layouts/PageLayout/PageLayout'
import ProfilePage from './pages/ProfilePage/ProfilePage'

const App = () => {
  return (
    <>
    <PageLayout>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/auth' element={<AuthPage/>}/>
      <Route path='/:username' element={<ProfilePage/>}/>
    </Routes>
    </PageLayout>
    </>
  )
}

export default App