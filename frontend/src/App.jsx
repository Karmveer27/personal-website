import { Route, Routes } from 'react-router-dom'
import Home from "./components/Home/index.jsx"
import About from "./components/About/index.jsx"
import Contact from './components/Contact'
import Portfolio from './components/Portfolio/index.jsx'

import Layout from './components/Layout'

import './App.scss'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
      
        </Route>
      </Routes>
    </>
  )
}

export default App