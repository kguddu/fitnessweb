import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Galery from './pages/Galery'
import Plans from './pages/Plans'
import Trainers from './pages/Trainers'
import Navbar from './components/Navbar'
import NotFound from './pages/NotFound'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Footer from './components/Footer'


const App = () => {
  return (
   <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='gallery' element={<Galery/>}/>
        <Route path='plans' element={<Plans/>}/>
        <Route path='trainers' element={<Trainers/>}/>
        <Route path='*' element={<NotFound/>}/>

      </Routes>
      <Footer/>
      </BrowserRouter>
  )
}

export default App