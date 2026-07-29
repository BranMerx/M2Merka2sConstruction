import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Referral from './pages/Referral'
import Services from './pages/Services'
import './App.css'
import MainLayout from './layouts/MainLayout'

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/referral" element={<Referral />} />
          <Route path="/services" element={<Services />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
