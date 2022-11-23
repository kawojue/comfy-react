import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <main>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </main>
  )
}

export default App
