import { HashRouter as  BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Page/Home'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>

    </BrowserRouter>
      
    </>
  )
}

export default App
