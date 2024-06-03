
import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import AuthPage from './pages/AuthPage/AuthPage'
import PageLayout from './Layouts/PageLayout/PageLayout'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import { auth } from './Firebase/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

const App = () => {

  const [authUser] = useAuthState(auth);

  return (
    <>
    <PageLayout>
    <Routes>
      <Route path='/' element={authUser?<Homepage/>:<Navigate to="/auth"  />}/>
      <Route path='/auth' element={!authUser?<AuthPage/>:<Navigate to="/"  />}/>
      <Route path='/:username' element={<ProfilePage/>}/>
    </Routes>
    </PageLayout>
    </>
  )
}

export default App