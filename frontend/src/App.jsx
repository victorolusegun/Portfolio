import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import Projects from './pages/Projects'
import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className='min-h-screen bg-white flex flex-col text-black'>
      <NavBar />
      <main className='flex-1'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App;