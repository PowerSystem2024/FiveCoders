import React from 'react'
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import TasksPages from './pages/TasksPages.jsx'
import TaskFormPage from './pages/TaskFormPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'
import LoginPage from './pages/LoginPage.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/about" element={<AboutPage/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/register" element={<RegisterPage/>} />
      <Route path="/profile" element={<ProfilePage/>} />

      <Route path="/tasks" element={<TasksPages/>} />
      <Route path="/tasks/new" element={<TaskFormPage/>} />
      <Route path="/tasks/:id/edit" element={<TaskFormPage/>} />
     
    </Routes>
  )
}

export default App