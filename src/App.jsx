import { useState } from 'react'
import { BrowserRouter, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Contacts from './pages/Contacts'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='/' element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
