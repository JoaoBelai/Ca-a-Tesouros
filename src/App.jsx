import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Map from './pages/Map/Map';
import Home from './pages/Home/Home';
import Suspects from './pages/Suspects/Suspects';
import Proofs from './pages/Proofs/Proofs';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <BrowserRouter>
        <main className="contentArea">
          <Routes>
              <Route path="/map" element={<Map/>} />
              <Route path="/" element={<Home/>} />
              <Route path="/suspects" element={<Suspects/>} />
              <Route path="/proofs" element={<Proofs/>} />
          </Routes>
        </main>
        <Navbar/>
      </BrowserRouter>
    </>
  )
}

export default App
