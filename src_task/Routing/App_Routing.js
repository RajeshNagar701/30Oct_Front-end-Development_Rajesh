import React from 'react'
import { BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Pnf from './Pages/Pnf'

function App_Routing() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/contact' element={<Contact/>}></Route>
                <Route path='*' element={<Pnf/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App_Routing