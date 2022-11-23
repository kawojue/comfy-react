import Home from './components/Home'
import About from './components/About'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <main>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </main>
  )
}

export default App
